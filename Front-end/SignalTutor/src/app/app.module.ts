import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    IntroPageComponent,
    KeysIntroComponent,
    IntroQuestionsComponent,
    KeysQuestionsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
