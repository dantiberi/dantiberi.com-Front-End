import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { GreetingComponent } from './greeting/greeting.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule, Title } from '@angular/platform-browser';
import { WeatherComponent } from 'src/app/misc-components/weather/weather.component';

const exportList = [HomeComponent, GreetingComponent, IntroductionComponent, WeatherComponent];

@NgModule({
  declarations: exportList,

  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    BrowserModule,
  ],
  providers: [
    Title                   //Register the Service
  ],
  exports: exportList
})
export class HomeModule { }
