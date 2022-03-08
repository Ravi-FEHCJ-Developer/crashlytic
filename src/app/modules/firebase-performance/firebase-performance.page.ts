import { Component } from '@angular/core';
import { FirebaseCrashlytics } from '@capacitor-community/firebase-crashlytics';
import { GlobalErrorHandlerService } from '../../core/services/global-error-handler/global-error-handler.service';

@Component({
  selector: 'app-firebase-performance',
  templateUrl: './firebase-performance.page.html',
  styleUrls: ['./firebase-performance.page.scss'],
})
export class FirebasePerformancePage {
  public async crash(): Promise<void> {

    // // display on key tab
    //   await FirebaseCrashlytics.setContext({
    //     key: 'performance page',
    //     value: 'performance page',
    //     type: 'string'
    //   });

    //   await FirebaseCrashlytics.setUserId({ userId: '3' });
    //   await FirebaseCrashlytics.setEnabled({enabled: false});
    //   await FirebaseCrashlytics.recordException({message: 'APP.'});   // expansion small title
    //   // await (await FirebaseCrashlytics.isEnabled()).enabled;
    //   await (await FirebaseCrashlytics.didCrashDuringPreviousExecution()).crashed;
    //   await FirebaseCrashlytics.sendUnsentReports();
    //   // await FirebaseCrashlytics.deleteUnsentReports();
    //   // await FirebaseCrashlytics.addLogMessage({ message: 'app is crashed' });
    //   await FirebaseCrashlytics.crash({ message: 'Test' });
  }
}
