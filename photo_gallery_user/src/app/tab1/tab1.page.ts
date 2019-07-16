import { Component } from '@angular/core';
import {IonicStorageModule, Storage} from '@ionic/storage';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  adim: any;
  soyadim: any;
  constructor(private storage: Storage, private transfer: FileTransfer, private file: File) {
    this.storage.set('Adim', 'Elif');
    this.adim = this.storage.get('Adim').then((val) => {
        this.adim = val ;
    });

    this.soyadim = 'Sagban';
  }

  fileTransfer: FileTransferObject = this.transfer.create();

  upload() {
    const options: FileUploadOptions = {
        fileKey: 'file',
        fileName: 'name.jpg',
        headers: {}
      };

    this.fileTransfer.upload('<file path>', '<api endpoint>', options)
     .then((data) => {
       // success
     }, (err) => {
       // error
     });
  }
  download() {
    const url = 'http://www.example.com/file.pdf';
    this.fileTransfer.download(url, this.file + 'file.pdf').then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      // handle error
    });
  }

}
