import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { DialogService } from '../dialog/dialog.service';
import * as stacktrace from 'stacktrace-js';
import { FirebaseCrashlytics } from '@capacitor-community/firebase-crashlytics';

const LOGTAG = '[GlobalErrorHandlerService]';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private injector: Injector) {}

  public handleError(error: unknown): void
  {
    this.handle(error);
  }

  private async handle(error: unknown): Promise<void> {
    try {
      const msg = this.getMessageFromUnknownError(error);
      // await this.showErrorAlert(message);
      console.log('helo 1');
      console.log(msg);
      FirebaseCrashlytics.addLogMessage({message : msg});
      FirebaseCrashlytics.crash({message : msg});
      stacktrace.get().then(
        (trace: any) =>
        {
          FirebaseCrashlytics.addLogMessage({message : trace});
          console.log('trace');
          console.log(trace);
        }
    );
    } catch (errorHandlerError) {
      console.error(`${LOGTAG} Internal exception:`, errorHandlerError);
    }
  }

  private getMessageFromUnknownError(error: unknown): string {
    console.log('helo 2');
    console.log(error);
    let message = 'An unknown error has occurred.';
    if (error instanceof Object && 'rejection' in error)
    {
      error = (error as any).rejection;
    }
    if (error instanceof Error && error.message)
    {
      message = error.message;
    }
    return message;
  }

  private async showErrorAlert(message: string): Promise<void> {
    const dialogService: DialogService =
      this.injector.get<DialogService>(DialogService);
    await dialogService.showErrorAlert({ message });
  }
}
