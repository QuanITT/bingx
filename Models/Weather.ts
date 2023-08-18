import { WeatherHourItem } from "./WeatherHourItem";
import { WeatherType } from "./WeatherType";

export class Weather {
  private title: string;
  private location: string;
  private weatherType: WeatherType;
  private listItem: WeatherHourItem
  constructor(
  title:string,
  location: string,
  weatherType:WeatherType,
  listItem: WeatherHourItem,
  ) { 
    this.weatherType = weatherType;
    this.listItem = listItem;
    this.title = title;
    this.location = location;
  }
}
