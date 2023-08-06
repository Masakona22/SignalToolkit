import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-first-quiz',
  templateUrl: './first-quiz.component.html',
  styleUrls: ['./first-quiz.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FirstQuizComponent implements OnInit {
  constructor(private router: Router, private toastr:ToastrService) {}
  QCount = 0;
  QNum = 1;
  score = 0;
  ngOnInit(): void {
    const questionText = document.querySelector(
      '.question-text'
      ) as HTMLHeadElement;
      questionText.textContent = `${this.questions[0].numb}. ${this.questions[0].question}`;
      
      const optionList = document.querySelector('.option-list') as HTMLDivElement;
    const OptionTag = `<div class="option"><span class="option-letter">${this.questions[0].options[0]}</span></div>
      <div class="option"><span class="option-letter">${this.questions[0].options[1]}</span></div>
      <div class="option"><span class="option-letter">${this.questions[0].options[2]}</span></div>
      <div class="option"><span class="option-letter">${this.questions[0].options[3]}</span></div>`;

    optionList.innerHTML = OptionTag;

    const questionCount = document.querySelector(
      '.question-total'
    ) as HTMLSpanElement;
    questionCount.textContent = `1 of ${this.questions.length} Questions`;
    this.QuestionCount();

    const option = document.querySelectorAll(
      '.option'
    ) as NodeListOf<HTMLDivElement>;
    for (var i = 0; i < option.length; i++) {
      onclick = (e: Event) => {
        this.optionSelected(e.target as HTMLDivElement);
      };
    }
  }

  optionSelected(answer: HTMLDivElement) {
    var userAnswer = answer.textContent;
    var correctAnswer = this.questions[this.QCount].answer;
    var optionList = document.querySelector('.option-list') as HTMLDivElement;
    var allOptions = optionList.children.length
    if (userAnswer == correctAnswer) {
      console.log('Correct');
      answer.classList.add('correct');
      this.score++;
      this.headerScore();
    } 
    else {
      console.log('Wrong');
      answer.classList.add('incorrect');
      for(let i = 0; i < allOptions; i++) {
        if(optionList.children[i].textContent == correctAnswer) {
          optionList.children[i].classList.add('class','option correct');
        }
      }

      
    }

    for(let i = 0; i < allOptions; i++) {
      optionList.children[i].classList.add('disabled');
    }
  }

  nextQuestion(index: number) {
    const questionText = document.querySelector(
      '.question-text'
    ) as HTMLHeadElement;
    questionText.textContent = `${this.questions[index].numb}. ${this.questions[index].question}`;
    const optionList = document.querySelector('.option-list') as HTMLDivElement;
    var OptionTag = `<div class="option"><span class="option-letter">${this.questions[index].options[0]}</span></div>
      <div class="option"><span class="option-letter">${this.questions[index].options[1]}</span></div>
      <div class="option"><span class="option-letter">${this.questions[index].options[2]}</span></div>
      <div class="option"><span class="option-letter">${this.questions[index].options[3]}</span></div>`;

    optionList.innerHTML = OptionTag;

    const option = document.querySelectorAll(
      '.option'
    ) as NodeListOf<HTMLDivElement>;
    for (var i = 0; i < option.length; i++) {
      onclick = (e: Event) => {
        this.optionSelected(e.target as HTMLDivElement);
      };
    }
  }

  headerScore(){
    const score = document.querySelector('.header-score') as HTMLSpanElement;
    score.textContent = `${this.score} of ${this.questions.length} Correct`;
  }
  QuestionCount() {
    if (this.QCount == 4) {
      this.QNum = 5;
    }
    const questionCount = document.querySelector(
      '.question-total'
    ) as HTMLSpanElement;
    questionCount.textContent = `${this.QNum++} of ${
      this.questions.length
    } Questions`;
  }


  next() {
    if (this.QCount == 4) {
      this.toastr.success('Quiz Completed');
      this.showResult();
    }
    this.QCount++;
    this.QuestionCount();
    this.nextQuestion(this.QCount);
    this.headerScore();
  }

  showResult() {
    const quizBox = document.querySelector('.quiz-box') as HTMLDivElement;
    const resultBox = document.querySelector('.results') as HTMLDivElement;
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const scoreText = document.querySelector('.score-text') as HTMLSpanElement;
    scoreText.textContent = `Your score is ${this.score} of ${this.questions.length}`;

    const percentageText = document.querySelector('percentage') as HTMLSpanElement;
    const progressVal = document.querySelector('.circular-progress') as HTMLDivElement;
    var progressStart = 0;
    var progressEnd = (this.score / this.questions.length) * 100;
    var speed = 20;

    var progress = setInterval(() => {
      progressStart++;
      percentageText.textContent = `${progressStart}%`;
      progressVal.style.background= `conic-gradient($warn-color ${progressStart * 3.6}deg, $accent-color 0deg );`;
      if(progressStart == progressEnd) {
        clearInterval(progress);
      }
    }, speed);
 
  }

  tryAgain() {
  
  }

  backToHome() {
    this.router.navigateByUrl('homePage');
  }

  questions = [
    {
      numb: 1,
      question: 'What is encryption?',
      answer: 'A. The process of changing information to code',
      options: [
        'A. The process of changing information to code',
        'B. The process of changing code to information',
        'C. The process of changing information to a different language',
        'D. The process of changing information to a different format',
      ],
    },
    {
      numb: 2,
      question: 'What does an encryption key do?',
      answer: 'D. All of the above',
      options: [
        'A. It is used to encrypt data',
        'B. It is used to decrypt data',
        'C. It is used to encrypt and decrypt data',
        'D. All of the above',
      ],
    },
    {
      numb: 3,
      question: 'How are encryption keys generated?',
      answer: 'C. Both A and B',
      options: [
        'A. Randomly',
        'B. By using a key generation algorithm',
        'C. Both A and B',
        'D. None of the above',
      ],
    },
    {
      numb: 4,
      question: 'Why is encryption important?',
      answer: 'D. All of the above',
      options: [
        'A. It protects sensitive data',
        'B. It is used to make data more secure',
        'C. It is used to ensure data integrity',
        'D. All of the above',
      ],
    },
    {
      numb: 5,
      question: 'What is cyphertext?',
      answer: 'B. Encrypted data',
      options: [
        'A. Decrypted data',
        'B. Encrypted data',
        'C. Data that has been formatted',
        'D. Data that has been changed to a different language',
      ],
    },
  ];
}
