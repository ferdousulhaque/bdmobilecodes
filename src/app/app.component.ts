import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMob } from '@ionic-native/admob';

import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';

interface AdMobType {
  banner: string,
  interstitial: string
};

var admobid: AdMobType;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private admob: AdMob) {
    this.initializeApp();

    
    admobid = { // for Android
      banner: 'ca-app-pub-2587350338192729/6243540892',
      interstitial: 'ca-app-pub-2587350338192729/7292968490'
    };

    this.admob.createBanner({
        adId: admobid.banner,
        //isTesting: false,//comment this out before publishing the app
        autoShow: true
      })

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Select Operator', component: HomePage },
      { title: 'About', component: AboutPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  Close() {
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
    //this.platform.exitApp();
  }

}
