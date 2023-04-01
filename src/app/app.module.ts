import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeModule } from './pages/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BannerComponent } from './misc-components/banner/banner.component';
import { DarkModeToggleComponent } from './misc-components/banner/dark-mode-toggle/dark-mode-toggle.component';
import { WeatherComponent } from './misc-components/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    DarkModeToggleComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
