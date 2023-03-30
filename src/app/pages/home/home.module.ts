import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { GreetingComponent } from './greeting/greeting.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const exportList = [HomeComponent, GreetingComponent, IntroductionComponent];

@NgModule({
  declarations:  exportList,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: exportList
})
export class HomeModule { }
