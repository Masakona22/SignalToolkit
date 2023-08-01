import { query } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-keys-questions',
  templateUrl: './keys-questions.component.html',
  styleUrls: ['./keys-questions.component.scss']
})
export class KeysQuestionsComponent {

  constructor(private router:Router) { }

  onClick(){
    const startBtn = document.querySelector('.btn-start') as HTMLButtonElement;
    const popUp = document.querySelector('.popup-info') as HTMLDivElement;
    const closeBtn = document.querySelector('.btn-exit') as HTMLButtonElement;
    const mainContainer = document.querySelector('.my-container') as HTMLDivElement;
    const navBar = document.querySelector('.my-nav') as HTMLDivElement;
    
    startBtn.addEventListener('click', () => {
      popUp.classList.add('active');
      mainContainer.classList.add('blur');
      navBar.classList.add('blur');
    });
    
    closeBtn.addEventListener('click', () => {
      mainContainer.classList.remove('blur');
      navBar.classList.remove('blur');
      popUp.classList.remove('active');
    });
  }

  onNext(){
    this.router.navigateByUrl('encryptionTypes');
  }

  questions = [
    {
      numb: 1,
      question:"What is encryption?",
      answer: "A. The process of changing information to code",
      options: [
        "A. The process of changing information to code",
        "B. The process of changing code to information",
        "C. The process of changing information to a different language",
        "D. The process of changing information to a different format"

      ]
    },
    {
      numb: 2,
      question:"What does an encryption key do?",
      answer: "D. All of the above",
      options: [
        "A. It is used to encrypt data",
        "B. It is used to decrypt data",
        "C. It is used to encrypt and decrypt data",
        "D. All of the above"

      ]
    },
    {
      numb: 3,
      question:"How are encryption keys generated?",
      answer: "C. Both A and B",
      options: [
        "A. Randomly",
        "B. By using a key generation algorithm",
        "C. Both A and B",
        "D. None of the above"
      ]
    },
    {
      numb: 4,
      question:"Why is encryption important?",
      answer: "D. All of the above",
      options: [
        "A. It protects sensitive data",
        "B. It is used to make data more secure",
        "C. It is used to ensure data integrity",
        "D. All of the above"

      ]
    },
    {
      numb: 5,
      question:"What is cyphertext?",
      answer: "B. Encrypted data",
      options: [
        "A. Decrypted data",
        "B. Encrypted data",
        "C. Data that has been formatted",
        "D. Data that has been changed to a different language"
      ]
    },
   ];
  
  showQuestions(){
    
  }

  startQuiz(){
    this.router.navigateByUrl('firstQuiz');
  }
}
