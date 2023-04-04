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

  /**
   * Returns the min-max temp in F for given day.
   * @param day Index of day. 0-6, with 0 being today.
   * @returns Min temperature, Max temperature
   */
  getMinMaxTemps(day: number): [number | undefined, number | undefined] {
    return [this.currentWeather?.daily.temperature_2m_min[day], this.currentWeather?.daily.temperature_2m_max[day]];
  }

  /**
   * API provides a weather code that generally describes the weather overall for that day. Here we interpret that code into an appropriate Angular material icon. 
   * See API docs: https://open-meteo.com/
   * @param day Day index
   * @returns Angular material icon name. 
   */
  getWeatherIcon(day: number): string {
    const weatherCode = this.currentWeather?.daily.weathercode[day] ?? 0;

    switch (true) {
      case (weatherCode == 0): 
        return "sunny";
      case (weatherCode == 1): 
        return "sunny";
      case (weatherCode == 2): 
        return "cloudy";
      case (weatherCode == 3): 
        return "cloudy";
      case (weatherCode == 45 || weatherCode == 48): 
        return "foggy";
      case (weatherCode >= 51 && weatherCode <= 55): 
        return "water_drop";
      case ((weatherCode >= 61 && weatherCode <= 63) || (weatherCode >= 80 && weatherCode <= 81)): 
        return "cloudy_snowing";
      case ((weatherCode >= 71 && weatherCode <= 77) || weatherCode == 85 || weatherCode == 86): 
        return "ac_unit";
      case ((weatherCode >= 95 && weatherCode <= 99) || (weatherCode == 65) || (weatherCode == 82)):
        return "thunderstorm";
      default:
        return "nest_farsight_weather";
    }
  }
}

