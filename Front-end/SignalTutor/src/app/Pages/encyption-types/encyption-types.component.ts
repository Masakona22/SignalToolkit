import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encyption-types',
  templateUrl: './encyption-types.component.html',
  styleUrls: ['./encyption-types.component.scss']
})
export class EncyptionTypesComponent {
  
    constructor(private router:Router) { }

    testArea1(){
      this.router.navigateByUrl('symmetricTestArea');
    }

}
