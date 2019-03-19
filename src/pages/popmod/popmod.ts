import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import {SMS} from '@ionic-native/sms';

/**
 * Generated class for the PopmodPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-popmod',
  templateUrl: 'popmod.html',
})
export class PopmodPage {

  itemnum: any;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public viewCtrl: ViewController,
          private callNumber: CallNumber,
          private sndSMS: SMS) {

  }

  //itemcode: any;
  //itemcode = this.navParams.get('itemcode');
  //console.log('test');

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopmodPage');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  submitModal() {
    this.viewCtrl.dismiss();
    if (this.itemnum== null)
      alert('No code provided');
    else{
      //console.log(this.navParams.get('itemcode')+this.itemnum+'#');
      this.callNumber.callNumber(this.navParams.get('itemcode')+this.itemnum+'#', true)
       .then(() => console.log('Launched dialer!'))
        .catch(() => console.log('Error launching dialer'));
    }
  }

}
