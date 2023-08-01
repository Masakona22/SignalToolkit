import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-keys-intro',
  templateUrl: './keys-intro.component.html',
  styleUrls: ['./keys-intro.component.scss']
})
export class KeysIntroComponent {
  constructor(private router:Router) { }

  previousScreen(){
    this.router.navigateByUrl('introPage');
  }

  nextScreen(){
    this.router.navigateByUrl('KeysQues');
  }
}
