import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { GreetingComponent } from './greeting/greeting.component';

const exportList = [HomeComponent, GreetingComponent];

@NgModule({
  declarations:  exportList,
  imports: [
    CommonModule
  ],
  exports: exportList
})
export class HomeModule { }
