import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss']
})
export class IntroPageComponent {

  constructor(private router:Router) { }

  // Navigate to the next page
  keysPage(){
    this.router.navigateByUrl('KeysIntro');
  }

}
