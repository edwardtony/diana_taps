import { Component, ViewChild } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Tabs, Events } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  @ViewChild("nametab") nametab: Tabs;
  
  constructor(public event: Events) {
    
  }

  ionViewDidLoad(){
    this.event.subscribe('gototab', () => {
      console.log('CHAU')
      this.nametab.select(2).then( (res) => {
        console.log(res)
      })
    })
  }
}
