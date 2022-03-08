import { Component } from '@angular/core';
import { FirebaseCrashlytics } from '@capacitor-community/firebase-crashlytics';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor()
  {
    // setTimeout(() =>
    // {
    //   // display on key tab
    // FirebaseCrashlytics.setContext({
    //   key: 'id',
    //   value: '999',
    //   type: 'string'
    // });

    // FirebaseCrashlytics.setContext({
    //   key: 'url',
    //   value: 'www.check.com',
    //   type: 'string'
    // });


    // FirebaseCrashlytics.setUserId({ userId: '998' });
    // FirebaseCrashlytics.setEnabled({enabled: false});
    // // FirebaseCrashlytics.recordException({message: 'APP.'});   // expansion small title
    // // (FirebaseCrashlytics.isEnabled()).enabled;
    // FirebaseCrashlytics.didCrashDuringPreviousExecution().then((val)=>
    // {
    //   console.log(val);
    // });
    // FirebaseCrashlytics.sendUnsentReports();
    // // FirebaseCrashlytics.deleteUnsentReports();
    // // FirebaseCrashlytics.addLogMessage({ message: 'app is crashed' });
    // FirebaseCrashlytics.crash({ message: 'app component'});

    //   FirebaseCrashlytics.crash({ message : 'Auto crash'});
    // }, 5000);
  }
}
