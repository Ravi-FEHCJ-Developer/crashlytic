import { Component } from '@angular/core';
import { FirebaseCrashlytics } from '@capacitor-community/firebase-crashlytics';
import { GlobalErrorHandlerService } from '../../core/services/global-error-handler/global-error-handler.service';

@Component({
  selector: 'app-firebase-crashlytics',
  templateUrl: './firebase-crashlytics.page.html',
  styleUrls: ['./firebase-crashlytics.page.scss'],
})
export class FirebaseCrashlyticsPage {
  abc: any;
  nmbr = 4;
  private readonly githubUrl =
    'https://github.com/capacitor-community/firebase-crashlytics';

    constructor( private globalErrorHandlerService: GlobalErrorHandlerService) {}

  public openOnGithub(): void {
    window.open(this.githubUrl, '_blank');
  }

  public async crash(): Promise<void> {

    const xyz = this.abc.xyz;
    const qwe = this.nmbr/0;
  //   const setContext = async () => {
  //     await FirebaseCrashlytics.setContext({
  //       key: 'firebase app page',
  //       value: 'firebase app page',
  //       type: 'string'
  //     });
  //   };

  // await FirebaseCrashlytics.setUserId({ userId: '2' });
  // await FirebaseCrashlytics.setEnabled({enabled: true});
  // await FirebaseCrashlytics.recordException({message: 'crashlytic.'});
  // await (await FirebaseCrashlytics.isEnabled()).enabled;
  // await (await FirebaseCrashlytics.didCrashDuringPreviousExecution()).crashed;
  // await FirebaseCrashlytics.sendUnsentReports();
  // await FirebaseCrashlytics.addLogMessage({ message: 'app is crashed' });
  // await FirebaseCrashlytics.crash({ message: 'Test' });
  }
}
