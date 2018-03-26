import { Component } from '@angular/core';
//import { NavController, NavParams} from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import {SMS} from '@ionic-native/sms';
import { NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import {PopmodPage} from '../popmod/popmod';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  selOperator: any;
  nameOperator: any;
  icons: string[];
  item_splitter: string[];
  items: Array<{title: string, note: string, icon: string, code: string}>;
  gpitems: Array<{title: string, note: string, icon: string, code: string}>;
  rbitems: Array<{title: string, note: string, icon: string, code: string}>;
  ttitems: Array<{title: string, note: string, icon: string, code: string}>;
  blitems: Array<{title: string, note: string, icon: string, code: string}>;
  atitems: Array<{title: string, note: string, icon: string, code: string}>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private toastCtrl: ToastController, 
              private callNumber: CallNumber, 
              private sndSMS: SMS,
              public modalCtrl: ModalController) {

    // If we navigated to this page, we will have an item available as a nav param
    
    this.selectedItem = navParams.get('item');
    this.selOperator = navParams.get('operator');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.gpitems = [];
    this.gpitems = [{
          title: 'No of SIM Registered',
          note: 'ussd',
          icon: 'call',
          code: '*4949#'
      },
      {
          title: 'Balance Check Prepaid',
          note: 'ussd',
          icon: 'call',
          code: '*566#'
      },
      {
          title: 'Balance Check Postpaid',
          note: 'sms',
          icon: 'md-chatboxes',
          code: '4666,usage'
      },
      {
          title: 'Internet Check',
          note: 'ussd',
          icon: 'call',
          code: '*567#'
      },
    {
          title: 'Know your Number',
          note: 'ussd',
          icon: 'call',
          code: '*2#'
      },
    {
          title: 'Package Check',
          note: 'ussd',
          icon: 'call',
          code: '*111*7*2#'
      },
    {
          title: 'Power Menu',
          note: 'ussd',
          icon: 'call',
          code: '*121#'
      },
    {
          title: 'Call Center',
          note: 'ussd',
          icon: 'call',
          code: '121'
      },
    {
          title: 'Check FnF Numbers',
          note: 'ussd',
          icon: 'call',
          code: '*121*1*5*5#'
      },
    {
          title: 'Change FnF Number',
          note: 'ussd',
          icon: 'call',
          code: '*121#'
      },
    {
          title: 'Set FnF Number',
          note: 'ussd',
          icon: 'call',
          code: '*121*1*5*1#'
      },
    {
          title: 'Delete FnF',
          note: 'ussd',
          icon: 'call',
          code: '*121*1*5*3#'
      },
    {
          title: 'Start Call Waiting',
          note: 'ussd',
          icon: 'call',
          code: '*43#'
      },
    {
          title: 'Stop Call Waiting',
          note: 'ussd',
          icon: 'call',
          code: '#43#'
      },
    {
          title: 'Emergency Balance',
          note: 'ussd',
          icon: 'call',
          code: '*1010*1#'
      },
    {
          title: 'Emergency Balance Check',
          note: 'ussd',
          icon: 'call',
          code: '*121*1*3#'
      },
    {
          title: 'Eligible Emergency',
          note: 'ussd',
          icon: 'call',
          code: '*577*12#'
      },
    {
          title: 'Call Me Back',
          note: 'pop',
          icon: 'md-card',
          code: '*123*'
      },
    {
          title: 'Start Call Divert',
          note: 'pop',
          icon: 'md-card',
          code: '*21*'
      },
    {
          title: 'Stop Call Divert',
          note: 'ussd',
          icon: 'call',
          code: '#21#'
      },
    {
          title: 'Missed Call Alert Activate',
          note: 'sms',
          icon: 'md-chatboxes',
          code: '6222,start'
      },
    {
          title: 'Stop Missed Call Alert',
          note: 'sms',
          icon: 'md-chatboxes',
          code: '6222,stop'
    }];

    this.rbitems = [];
    this.rbitems = [{
          title: 'No of SIM Registered',
          note: 'ussd',
          icon: 'call',
          code: '*1600*3#'
      },
      {
          title: 'Balance Check Prepaid',
          note: 'ussd',
          icon: 'call',
          code: '*222#'
      },
      {
          title: 'Balance Check Postpaid',
          note: 'ussd',
          icon: 'call',
          code: '*140*4#'
      },
    {
          title: 'Internet Balance Check',
          note: 'ussd',
          icon: 'call',
          code: '*8444*88#'
      },
    {
          title: 'Know your number',
          note: 'ussd',
          icon: 'call',
          code: '*140*2*4#'
      },
    {
          title: 'Package Check',
          note: 'ussd',
          icon: 'call',
          code: '*140*14#'
      },
    {
          title: 'Power Menu',
          note: 'ussd',
          icon: 'call',
          code: '*140#'
      },
    {
          title: 'Call Center',
          note: 'ussd',
          icon: 'call',
          code: '123'
      },
    {
          title: 'Check FnF Numbers',
          note: 'ussd',
          icon: 'call',
          code: '*140#'
      },
    {
          title: 'Change FnF Number',
          note: 'ussd',
          icon: 'call',
          code: '*140#'
      },
    {
          title: 'Set FnF Number',
          note: 'ussd',
          icon: 'call',
          code: '*140#'
      },
    {
          title: 'Start Call Divert',
          note: 'pop',
          icon: 'md-card',
          code: '*21*'
      },
    {
          title: 'Stop Call Divert',
          note: 'ussd',
          icon: 'call',
          code: '#21#'
      },
    {
          title: 'Start Call Waiting',
          note: 'ussd',
          icon: 'call',
          code: '*43#'
      },
    {
          title: 'Stop Call Waiting',
          note: 'ussd',
          icon: 'call',
          code: '#43#'
      },
    {
          title: 'Missed Call Alert Activate',
          note: 'sms',
          icon: 'md-chatboxes',
          code: '8272,ON'
      },
    {
          title: 'Stop Missed Call Alert',
          note: 'sms',
          icon: 'md-chatboxes',
          code: '8272,OFF'
      },
    {
          title: 'Emergency Balance Check',
          note: 'ussd',
          icon: 'call',
          code: '*222*16#'
      },
    {
          title: 'Emergency Balance Activate',
          note: 'ussd',
          icon: 'call',
          code: '*8811*1#'
      },
    {
          title: 'Eligible Emergency',
          note: 'ussd',
          icon: 'call',
          code: '*8811*1*1*3#'
    }];

    this.ttitems = [];
    this.ttitems = [{
          title: 'No of SIM Registered',
          note: 'sms',
          icon: 'md-chatboxes',
          code: '1600,info'
      },
      {
          title: 'Balance Check',
          note: 'ussd',
          icon: 'call',
          code: '*152#'
      },
      {
          title: 'Internet Balance Check',
          note: 'ussd',
          icon: 'call',
          code: '*152#'
      },
    {
          title: 'Know your Number Prepaid',
          note: 'ussd',
          icon: 'call',
          code: '*551#'
      },
    {
          title: 'Know your Number Postpaid',
          note: 'sms',
          icon: 'md-chatboxes',
          code: '222,Tar'
      },
    {
          title: 'Check FnF Numbers',
          note: 'sms',
          icon: 'md-chatboxes',
          code: '363,see'
      },
    {
          title: 'Change FnF Number',
          note: 'ussd',
          icon: 'call',
          code: '1515'
      },
    {
          title: 'Set FnF Number',
          note: 'pop',
          icon: 'md-chatboxes',
          code: '363,Add'
      },
    {
          title: 'Delete FnF',
          note: 'pop',
          icon: 'md-chatboxes',
          code: '363,Del'
      },
    {
          title: 'Registration to FnF',
          note: 'sms',
          icon: 'md-chatboxes',
          code: '363,Reg'
      },
    {
          title: 'Call Center',
          note: 'ussd',
          icon: 'call',
          code: '1234'
      },
    {
          title: 'Start Call Divert',
          note: 'pop',
          icon: 'md-card',
          code: '*21*'
      },
    {
          title: 'Stop Call Divert',
          note: 'ussd',
          icon: 'call',
          code: '#21#'
      },
    {
          title: 'Start Call Waiting',
          note: 'ussd',
          icon: 'call',
          code: '*43#'
      },
    {
          title: 'Stop Call Waiting',
          note: 'ussd',
          icon: 'call',
          code: '#43#'
      },
    {
          title: 'Emergency Balance Check',
          note: 'ussd',
          icon: 'call',
          code: '*1122#'
      },
    {
          title: 'Emergency Balance',
          note: 'ussd',
          icon: 'call',
          code: '*1122#'
      },
    {
          title: 'Missed Call Alert Activate',
          note: 'sms',
          icon: 'md-chatboxes',
          code: '2455,REG'
      },
    {
          title: 'Stop Missed Call Alert',
          note: 'sms',
          icon: 'md-chatboxes',
          code: '245,CAN'
    }];

    this.blitems = [];
    this.blitems = [{
          title: 'No of SIM Registered',
          note: 'ussd',
          icon: 'call',
          code: '*1600*2#'
      },
      {
          title: 'Balance Check Prepaid',
          note: 'ussd',
          icon: 'call',
          code: '*124#'
      },
      {
          title: 'Balance Check Postpaid',
          note: 'sms',
          icon: 'md-chatboxes',
          code: '121,bill'
      },
    {
          title: 'Internet Balance Check',
          note: 'ussd',
          icon: 'call',
          code: '*5000*500#'
      },
    {
          title: 'Know your Number',
          note: 'ussd',
          icon: 'call',
          code: '*511#'
      },
    {
          title: 'Package Check',
          note: 'ussd',
          icon: 'call',
          code: '*125#'
      },
    {
          title: 'Power Menu',
          note: 'ussd',
          icon: 'call',
          code: '*789#'
      },
    {
          title: 'Call Center',
          note: 'ussd',
          icon: 'call',
          code: '121'
      },
    {
          title: 'Check FnF Numbers',
          note: 'ussd',
          icon: 'call',
          code: '*789*7*3*2#'
      },
    {
          title: 'Change FnF Number',
          note: 'ussd',
          icon: 'call',
          code: '*789*7*3*3#'
      },
    {
          title: 'Set FnF Number',
          note: 'ussd',
          icon: 'call',
          code: '*789*7*3*1#'
      },
    {
          title: 'Call Me Back',
          note: 'pop',
          icon: 'md-card',
          code: '*126*'
      },
    {
          title: 'Emergency Balance',
          note: 'ussd',
          icon: 'call',
          code: '*874#'
      },
    {
          title: 'Emergency Balance Check',
          note: 'ussd',
          icon: 'call',
          code: '*874*0#'
      },
    {
          title: 'Start Call Divert',
          note: 'pop',
          icon: 'md-card',
          code: '*21*'
      },
    {
          title: 'Stop Call Divert',
          note: 'ussd',
          icon: 'call',
          code: '#21#'
      },
    {
          title: 'Start Call Waiting',
          note: 'ussd',
          icon: 'call',
          code: '*43#'
      },
    {
          title: 'Stop Call Waiting',
          note: 'ussd',
          icon: 'call',
          code: '#43#'
      },
    {
          title: 'Missed Call Alert Activate',
          note: 'sms',
          icon: 'md-chatboxes',
          code: '622,start'
      },{
          title: 'Stop Missed Call Alert',
          note: 'sms',
          icon: 'md-chatboxes',
          code: '622,stop'
    }];

    this.atitems = [];
    this.atitems = [{
          title: 'No of SIM Registered',
          note: 'ussd',
          icon: 'call',
          code: '*121*4444#'
      },
      {
          title: 'Balance Check Prepaid',
          note: 'ussd',
          icon: 'call',
          code: '*778#'
      },
      {
          title: 'Balance Check Postpaid',
          note: 'ussd',
          icon: 'call',
          code: '*121*70#'
      },
    {
          title: 'Internet Balance Prepaid',
          note: 'ussd',
          icon: 'call',
          code: '*778*555#'
      },
    {
          title: 'Internet Balance Postpaid',
          note: 'ussd',
          icon: 'call',
          code: '*121*70#'
      },
    {
          title: 'Know your number',
          note: 'ussd',
          icon: 'call',
          code: '*121*6*3#'
      },
    {
          title: 'Package Check Prepaid',
          note: 'ussd',
          icon: 'call',
          code: '*121*1*2*2#'
      },
    {
          title: 'Package Check Postpaid',
          note: 'ussd',
          icon: 'call',
          code: '*121*1*1*1#'
      },
    {
          title: 'Call Me Back',
          note: 'ussd',
          icon: 'call',
          code: '*121*5#'
      },
    {
          title: 'Check FnF Numbers',
          note: 'ussd',
          icon: 'call',
          code: '*121*4*3#'
      },
    {
          title: 'Change FnF Number',
          note: 'ussd',
          icon: 'call',
          code: '*121*4*1#'
      },
    {
          title: 'Set FnF Number',
          note: 'ussd',
          icon: 'call',
          code: '*121*4*1#'
      },
    {
          title: 'Delete FnF',
          note: 'ussd',
          icon: 'call',
          code: '*121*4*2#'
      },
    {
          title: 'Call Center',
          note: 'ussd',
          icon: 'call',
          code: '121'
      },
    {
          title: 'Start Call Divert',
          note: 'pop',
          icon: 'md-card',
          code: '*21*'
      },
    {
          title: 'Stop Call Divert',
          note: 'ussd',
          icon: 'call',
          code: '#21#'
      },
    {
          title: 'Start Call Waiting',
          note: 'ussd',
          icon: 'call',
          code: '*43#'
      },
    {
          title: 'Stop Call Waiting',
          note: 'ussd',
          icon: 'call',
          code: '#43#'
      },
    {
          title: 'Emergency Balance Check',
          note: 'ussd',
          icon: 'call',
          code: '*141*10#'
      },
    {
          title: 'Emergency Balance',
          note: 'ussd',
          icon: 'call',
          code: '*141*10#'
      },
    {
          title: 'Missed Call Alert Activate',
          note: 'ussd',
          icon: 'call',
          code: '*121*2*4#'
      },
    {
          title: 'Stop Missed Call Alert',
          note: 'ussd',
          icon: 'call',
          code: '*121*3*4#'
    }];

    this.items = [];
    if (this.selOperator == "GP"){
      this.items = this.gpitems;
      this.nameOperator = "Grameenphone";
    }else if (this.selOperator == "RB"){
      this.items = this.rbitems;
      this.nameOperator = "Robi";
    }else if (this.selOperator == "TT"){
      this.items = this.ttitems;
      this.nameOperator = "Teletalk";
    }else if (this.selOperator == "BL"){
      this.items = this.blitems;
      this.nameOperator = "Banglalink";
    }else{
      this.items = this.atitems;
      this.nameOperator = "Airtel";
    }
    

    /*for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }*/
  }

  itemTapped(event, item) {

    if (item.note == 'ussd'){
    //alert("tel:" + item.code);
    //window.plugins.CallNumber.callNumber(onSuccess, onError, number, bypassAppChooser);

    this.callNumber.callNumber(item.code, true)
     .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
    }
    else if (item.note == 'sms'){
      this.item_splitter = item.code.split(',');
      this.sndSMS.send(this.item_splitter[0] , this.item_splitter[1]);
      //alert("number:" + this.item_splitter[0] + "\nmessage:" + this.item_splitter[1]);
    }
    else{
      //alert("PoP Modal:" + item.code);
      //let obj = {itemcode: item.code};
      let popMod = this.modalCtrl.create(PopmodPage, {itemcode: item.code});
      popMod.present();
    }
  }

}
