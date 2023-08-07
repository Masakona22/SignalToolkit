import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assymmetric-continued',
  templateUrl: './assymmetric-continued.component.html',
  styleUrls: ['./assymmetric-continued.component.scss']
})
export class AssymmetricContinuedComponent {
  constructor(private router:Router) { }
  goBack(){
    this.router.navigateByUrl('asymmetricEncryption');
  }
  goFoward(){
    this.router.navigateByUrl('streamQuiz');
  }

}
