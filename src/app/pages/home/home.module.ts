import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

const exportList = [HomeComponent];

@NgModule({
  declarations:  exportList,
  imports: [
    CommonModule
  ],
  exports: exportList
})
export class HomeModule { }
