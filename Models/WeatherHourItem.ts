import { WeatherType } from "./WeatherType";


export class WeatherHourItem {
  private weatherType: WeatherType;
  private temperature: number;
  private time :string;
  private humidity: number;
  constructor(
   WeatherType:WeatherType,
   temperature:number,
   time: string,
   humidity:number
  ) { 
    this.weatherType = WeatherType,
    this.temperature = temperature,
    this.time = time,
    this.humidity = humidity
  }
}
