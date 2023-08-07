import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { IntroPageComponent } from './Pages/intro-page/intro-page.component';
import { KeysIntroComponent } from './Pages/keys-intro/keys-intro.component';
import { IntroQuestionsComponent } from './Pages/intro-questions/intro-questions.component';
import { KeysQuestionsComponent } from './Pages/keys-questions/keys-questions.component';
import { MaterialModule } from './material/material.module';
import { EncyptionTypesComponent } from './Pages/encyption-types/encyption-types.component';
import { FirstQuizComponent } from './Pages/first-quiz/first-quiz.component';
import { SymmetricTestAreaComponent } from './Pages/symmetric-test-area/symmetric-test-area.component';
import { ContentBodyComponent } from './Components/navbar/content-body/content-body.component';
import { ToastrModule } from 'ngx-toastr';
import { AsymmetricEncryptionComponent } from './asymmetric-encryption/asymmetric-encryption.component';
import { AsymmetricComponent } from './Pages/asymmetric/asymmetric.component';
import { AssymmetricContinuedComponent } from './Pages/assymmetric-continued/assymmetric-continued.component';
import { StreamCypherComponent } from './Pages/stream-cypher/stream-cypher.component';
import { BlockCypherComponent } from './Pages/block-cypher/block-cypher.component';
import { StreamQuizComponent } from './Pages/stream-quiz/stream-quiz.component';
import { BlockQuizComponent } from './Pages/block-quiz/block-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    IntroPageComponent,
    KeysIntroComponent,
    IntroQuestionsComponent,
    KeysQuestionsComponent,
    EncyptionTypesComponent,
    FirstQuizComponent,
    SymmetricTestAreaComponent,
    ContentBodyComponent,
    AsymmetricEncryptionComponent,
    AsymmetricComponent,
    AssymmetricContinuedComponent,
    StreamCypherComponent,
    BlockCypherComponent,
    StreamQuizComponent,
    BlockQuizComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
