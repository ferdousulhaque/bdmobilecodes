import { Component } from '@angular/core';
import { NavController , Platform} from 'ionic-angular';
import { AdMob } from '@ionic-native/admob';

import {ListPage} from '../list/list';

interface AdMobType {
  banner: string,
  interstitial: string
};

var admobid: AdMobType;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private admob: AdMob, private platform: Platform) {
    this.platform = platform;
  }


  Selected(event, operator) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      operator: operator
    });
  }

  Close(){
    admobid = { // for Android
      banner: 'ca-app-pub-2587350338192729/6243540892',
      interstitial: 'ca-app-pub-2587350338192729/7292968490'
    };
    this.admob.prepareInterstitial({
        adId: admobid.interstitial,
        //isTesting: true, //comment this out before publishing the app
        autoShow: true
      });
    setTimeout(this.platform.exitApp, 7000);
  }
}
