import { Component } from '@angular/core';
import {IonicStorageModule, Storage} from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  adim: any;
  soyadim: any;
  constructor(private storage: Storage) {
    this.storage.set('Adim', 'Elif');
    this.adim = this.storage.get('Adim').then((val) => {
        this.adim = val ;
    });

    this.soyadim = 'Sagban';
  }



}
