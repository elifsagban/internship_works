import { Component } from '@angular/core';
import {IonicStorageModule, Storage} from '@ionic/storage';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  uname: string;
  password: any;
  key = 'username';
  lock = 'password';
  users: Array<{username: any, password: any}> = [];


  constructor(private storage: Storage, public alertController: AlertController) {

      this.storage.get( 'users' ).then((val) => {
          if (val) {
            this.users = val;
          } else {
            this.users = [];
          }
      });
  }

  async saveData() {

    this.users.push({
      username: this.uname,
      password: this.password
    });

    this.storage.set('users', this.users);

    this.storage.set(this.key, this.uname);
    this.storage.set(this.lock, this.password);

  }

  async loadData() {
    Promise.all([this.storage.get(this.key), this.storage.get(this.lock)]).then(async val => {
      console.log('your username is: ', val);
      const alert = await this.alertController.create({
        header: 'User created!',
        subHeader: 'Your username is: ' + val[0] + ' Your password is: ' + val[1],
        buttons: ['OK']
        });
      await alert.present();
  });
  }
  }

