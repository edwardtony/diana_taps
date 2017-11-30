import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { TestPage } from '../test/test';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public events: Events) {

  }

  goToTab(){
    this.navCtrl.push(TestPage)
  }

}
