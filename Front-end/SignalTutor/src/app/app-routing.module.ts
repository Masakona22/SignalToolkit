import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroPageComponent } from './Pages/intro-page/intro-page.component';
import { IntroQuestionsComponent } from './Pages/intro-questions/intro-questions.component';
import { KeysIntroComponent } from './Pages/keys-intro/keys-intro.component';
import { KeysQuestionsComponent } from './Pages/keys-questions/keys-questions.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'introPage',component: IntroPageComponent},
  {path:'introQues',component:IntroQuestionsComponent},
  {path:'KeysIntro',component:KeysIntroComponent},
  {path:'KeysQues',component:KeysQuestionsComponent},
  {path:'homePage',component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
