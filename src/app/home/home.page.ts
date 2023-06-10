import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NFC, Ndef } from '@awesome-cordova-plugins/nfc/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private nfc: NFC, private ndef: Ndef, private router:Router) { }
  readerMode$ : any
  on(){
    let flags = this.nfc.FLAG_READER_NFC_A | this.nfc.FLAG_READER_NFC_V;
    this.readerMode$ = this.nfc.readerMode(flags).subscribe(
     tag => this.router.navigateByUrl('/berhasil'),
     err => console.log('Error reading tag', err)
 );
  }
}
