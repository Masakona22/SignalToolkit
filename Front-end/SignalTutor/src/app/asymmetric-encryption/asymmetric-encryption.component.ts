import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asymmetric-encryption',
  templateUrl: './asymmetric-encryption.component.html',
  styleUrls: ['./asymmetric-encryption.component.scss']
})
export class AsymmetricEncryptionComponent {
  constructor(private router:Router) { }

 goBack(){
  this.router.navigateByUrl('blockCypher');
 }
 goFoward(){
  this.router.navigateByUrl('asymmetricContinued');
 }

}
