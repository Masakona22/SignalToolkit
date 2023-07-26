import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';

const Materials=[
  MatButtonModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  ReactiveFormsModule,
  MatCheckboxModule,
  MatToolbarModule
]

@NgModule({
  imports:[Materials],
  exports:[Materials]
})
export class MaterialModule { }
