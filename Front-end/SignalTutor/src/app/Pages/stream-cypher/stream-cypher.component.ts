import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stream-cypher',
  templateUrl: './stream-cypher.component.html',
  styleUrls: ['./stream-cypher.component.scss']
})
export class StreamCypherComponent {
  constructor(private router:Router) { }
  goBack(){
    this.router.navigateByUrl('encryptionTypes');
  }
  goFoward(){
    this.router.navigateByUrl('blockCypher');
  }

}
