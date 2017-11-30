import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {

  constructor(public navCtrl: NavController, public events: Events) {

  }

  goToTab(){
    console.log('HOLA')
    this.events.publish('gototab')
  }

}
