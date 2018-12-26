import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [LogInComponent, HomeComponent],
  imports: [
    CommonModule
  ]
})
export class ViewsModule { }
