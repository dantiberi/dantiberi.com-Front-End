import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { WeatherData } from './weather-interfaces';

// Open-Meteo: free, no API key required. Docs: https://open-meteo.com/en/docs

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly forecastUrl = 'https://api.open-meteo.com/v1/forecast?latitude=41.85&longitude=-87.65&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&temperature_unit=fahrenheit&windspeed_unit=mph&timezone=America%2FChicago';

  constructor(private http: HttpClient) { }

  /**
   * Retrieve Chicago weather data. Restricted to Chicago (no user location data).
   * @returns See WeatherData interface.
   */
  async fetchWeather(): Promise<WeatherData> {
    return firstValueFrom(this.http.get<WeatherData>(this.forecastUrl));
  }
}
