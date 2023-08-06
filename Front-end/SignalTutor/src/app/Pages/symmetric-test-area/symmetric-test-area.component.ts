import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-symmetric-test-area',
  templateUrl: './symmetric-test-area.component.html',
  styleUrls: ['./symmetric-test-area.component.scss'],
})
export class SymmetricTestAreaComponent {
  constructor() {}
  images = [
    'assets/img/Symmetric encryption/decryption.png',
    'assets/img/Symmetric encryption/encryption.png',
    'assets/img/Symmetric encryption/same key.png',
    'assets/img/Symmetric encryption/secret key.png',
    'assets/img/Symmetric encryption/secret key.png',
  ];

  cipher_text: string[]  = [];
  decryption: string[] = [];
  encryption: string[] = [];
  same_key: string[] = [];
  plain_text2: string[] = [];
  secret_key: string[] = [];
  secret_key2: string[] = [];

  check(
    decryption: string[],
    encryption: string[],
    same_key: string[],
    secret_key: string[],
    secret_key2: string[]
  ) {
    if (
      decryption.length == 1 && decryption[0] == 'assets/img/Symmetric encryption/decryption.png' &&
      encryption.length == 1 && encryption[0] == 'assets/img/Symmetric encryption/encryption.png' &&
      same_key.length == 1 && same_key[0] == 'assets/img/Symmetric encryption/same key.png' &&
      secret_key.length == 1 && secret_key[0] == 'assets/img/Symmetric encryption/secret key.png' &&
      secret_key2.length == 1 && secret_key2[0] == 'assets/img/Symmetric encryption/secret key.png'
    ) {
      console.log('true');
      return true;
    } else {
      console.log('false');
      return false;
    }
  }
  
  drop(event:CdkDragDrop<string[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data,event.previousIndex,event.currentIndex);
    } else{
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
