
import { InjectableMetadata } from "../Base/decorator";

@InjectableMetadata({
    providedIn: 'root'
})
export class WeatherService {
  getNew() {
    return "news";
  }
  providedIn(providedIn: string) {
    return function (target: Function) {
        target.prototype.providedIn = providedIn;
    };

  }


}