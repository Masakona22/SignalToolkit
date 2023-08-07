import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-stream-quiz',
  templateUrl: './stream-quiz.component.html',
  styleUrls: ['./stream-quiz.component.scss']
})
export class StreamQuizComponent {
  constructor(private router:Router,private toastr:ToastrService) {}
  images = [
    'assets/img/Symmetric encryption/part-1.png',
    'assets/img/Symmetric encryption/part2.png',
    'assets/img/Symmetric encryption/part3.png',
    'assets/img/Symmetric encryption/part4.png',
  ];

  part1: string[] = [];
  part2: string[] = [];
  part3: string[] = [];
  part4: string[] = [];

  check(
    part1: string[],
    part2: string[],
    part3: string[],
    part4: string[],
  ) {
    if (
      part1.length == 1 && part1[0] == 'assets/img/Symmetric encryption/part-1.png' &&
      part2.length == 1 && part2[0] == 'assets/img/Symmetric encryption/part2.png' &&
      part3.length == 1 && part3[0] == 'assets/img/Symmetric encryption/part3.png' &&
      part4.length == 1 && part4[0] == 'assets/img/Symmetric encryption/part4.png'
    ) {
      console.log('true');
      this.toastr.success('Correct Answer');
      const nextButton = document.getElementById('nextButton') as HTMLButtonElement;
      nextButton.disabled = false;
      return true;
    } else {
      console.log('false');
      this.toastr.error('Wrong Answer');
      return false;
    }
  }
  
  goToNextQuiz(){
    this.router.navigateByUrl('symmetricTestArea');
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

