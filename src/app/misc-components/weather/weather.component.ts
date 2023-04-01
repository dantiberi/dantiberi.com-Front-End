import { Component, OnInit } from '@angular/core';
import { WeatherData } from './weather-interfaces';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit{

  currentWeather: WeatherData | undefined;

  daysOfWeek: string[] = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {

    console.log("Fetching weather...");
    //Immediately-invoked / Anonymous Async Function
    (async () => {
      this.currentWeather = await this.weatherService.fetchWeather();
    })().then(() => {
      console.log(this.currentWeather);
    });
  }

}

