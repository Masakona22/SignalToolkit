import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-block-cypher',
  templateUrl: './block-cypher.component.html',
  styleUrls: ['./block-cypher.component.scss']
})
export class BlockCypherComponent {
  constructor(private router:Router) { }
  goBack(){
    this.router.navigateByUrl('streamCypher');
  }
  goFoward(){
    this.router.navigateByUrl('asymmetricEncryption');
  }
}
