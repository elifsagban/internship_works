import { Component } from '@angular/core';
import {IonicStorageModule, Storage} from '@ionic/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  adim: any;
  constructor(private storage: Storage) {
    this.adim = this.storage.get('Adim').then((val) => {
      this.adim = val ;
  });
  }

}
