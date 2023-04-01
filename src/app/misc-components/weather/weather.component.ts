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

  relativeDaysOfWeek: string[] = []; //Similar to daysOfWeek but made to start with today.

  today = new Date();
  todayIndex: number= this.today.getDay(); //Day of the week as index 0 - 6, Sunday = 0.

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {  
    //Fill relativeDaysOfWeek
    let idx = this.todayIndex;
    for (let i = 0; i < 7; i++) {
      if(idx > 6){
        idx = 0;
      }
      this.relativeDaysOfWeek.push(this.daysOfWeek[idx]);

      idx++;
    }

    //Immediately-invoked / Anonymous Async Function
    (async () => {
      this.currentWeather = await this.weatherService.fetchWeather();
    })().then(() => {
      console.log(this.currentWeather);
    });
  }

}

