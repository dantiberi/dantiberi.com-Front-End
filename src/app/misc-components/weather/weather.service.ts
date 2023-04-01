import { Injectable } from '@angular/core';
import axios from 'axios';
import { WeatherData } from './weather-interfaces';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  /**
   * Retrieve Chicago weather data. I decided to restrict this to Chicago so that I don't have to utilize sensitive user location data. 
   * @returns See WeatherData interface.
   */
  async fetchWeather(): Promise<WeatherData> {
    return new Promise<WeatherData>((resolve, reject) => {
      const apiCallOptions = {
        method: 'GET',
        url: 'https://api.open-meteo.com/v1/forecast?latitude=41.84&longitude=-87.61&models=best_match&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=America%2FChicago',
      };
      axios
        .request(apiCallOptions)
        .then(function ({ data }: { data: WeatherData }) {
          //console.log(data);
          resolve(data);
        })
        .catch(function (error: any) {
          console.error(error);
          reject(error);
        });
    });
  }
}
