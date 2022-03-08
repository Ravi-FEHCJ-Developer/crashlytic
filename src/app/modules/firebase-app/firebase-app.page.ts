import { Component, OnInit } from '@angular/core';
import { FirebaseCrashlytics } from '@capacitor-community/firebase-crashlytics';
import { GlobalErrorHandlerService } from '../../core/services/global-error-handler/global-error-handler.service';
// import * as StackTrace from 'stacktrace-js';

@Component({
  selector: 'app-firebase-app',
  templateUrl: './firebase-app.page.html',
  styleUrls: ['./firebase-app.page.scss'],
})
export class FirebaseAppPage
{
  constructor( private globalErrorHandlerService: GlobalErrorHandlerService) {}

  public async crash(): Promise<void> {

  //   // display on key tab
  //     await FirebaseCrashlytics.setContext({
  //       key: 'id',
  //       value: '1',
  //       type: 'string'
  //     });


  // await FirebaseCrashlytics.setUserId({ userId: '1' });
  // await FirebaseCrashlytics.setEnabled({enabled: false});
  // // await FirebaseCrashlytics.recordException({message: 'APP.'});   // expansion small title
  // // await (await FirebaseCrashlytics.isEnabled()).enabled;
  // await (await FirebaseCrashlytics.didCrashDuringPreviousExecution()).crashed;
  // await FirebaseCrashlytics.sendUnsentReports();
  // // await FirebaseCrashlytics.deleteUnsentReports();
  // // await FirebaseCrashlytics.addLogMessage({ message: 'app is crashed' });
  // await FirebaseCrashlytics.crash({ message: 'Test' });
  }
}
