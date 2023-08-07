import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroPageComponent } from './Pages/intro-page/intro-page.component';
import { IntroQuestionsComponent } from './Pages/intro-questions/intro-questions.component';
import { KeysIntroComponent } from './Pages/keys-intro/keys-intro.component';
import { KeysQuestionsComponent } from './Pages/keys-questions/keys-questions.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { EncyptionTypesComponent } from './Pages/encyption-types/encyption-types.component';
import { FirstQuizComponent } from './Pages/first-quiz/first-quiz.component';
import { SymmetricTestAreaComponent } from './Pages/symmetric-test-area/symmetric-test-area.component';
import { AsymmetricEncryptionComponent } from './asymmetric-encryption/asymmetric-encryption.component';
import { AsymmetricComponent } from './Pages/asymmetric/asymmetric.component';
import { AssymmetricContinuedComponent } from './Pages/assymmetric-continued/assymmetric-continued.component';
import { StreamCypherComponent } from './Pages/stream-cypher/stream-cypher.component';
import { BlockCypherComponent } from './Pages/block-cypher/block-cypher.component';
import { StreamQuizComponent } from './Pages/stream-quiz/stream-quiz.component';
import { BlockQuizComponent } from './Pages/block-quiz/block-quiz.component';

const routes: Routes = [
  {path:'',redirectTo:'homePage',pathMatch:'full'},
  {path:'introPage',component: IntroPageComponent},
  {path:'introQues',component:IntroQuestionsComponent},
  {path:'KeysIntro',component:KeysIntroComponent},
  {path:'KeysQues',component:KeysQuestionsComponent},
  {path:'homePage',component:HomePageComponent},
  {path:'encryptionTypes',component:EncyptionTypesComponent},
  {path:'firstQuiz',component:FirstQuizComponent},
  {path:'symmetricTestArea',component:SymmetricTestAreaComponent},
  {path:'asymmetricEncryption',component:AsymmetricEncryptionComponent},
  {path:'asymmetric',component:AsymmetricComponent},
  {path:'asymmetricContinued',component:AssymmetricContinuedComponent},
  {path:'streamCypher',component:StreamCypherComponent},
  {path:'blockCypher',component:BlockCypherComponent},
  {path:'streamQuiz',component:StreamQuizComponent},
  {path:'blockQuiz',component:BlockQuizComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
