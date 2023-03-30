import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { GreetingComponent } from './greeting/greeting.component';
import { IntroductionComponent } from './introduction/introduction.component';

const exportList = [HomeComponent, GreetingComponent, IntroductionComponent];

@NgModule({
  declarations:  exportList,
  imports: [
    CommonModule
  ],
  exports: exportList
})
export class HomeModule { }
