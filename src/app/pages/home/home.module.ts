import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { GreetingComponent } from './greeting/greeting.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Title } from '@angular/platform-browser';
import { WeatherComponent } from 'src/app/misc-components/weather/weather.component';

@NgModule({
  declarations: [
    HomeComponent,
    GreetingComponent,
    IntroductionComponent,
    WeatherComponent
  ],

  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [
    Title                   //Register the Service
  ]
})
export class HomeModule { }
