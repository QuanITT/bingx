import { Injectable } from "../Base/decorator";

@Injectable({
    providedIn: 'root'
})
export class NewsService {
  getNew() {
    return "news";
  }
  providedIn(providedIn: string) {
    return function (target: Function) {
        target.prototype.providedIn = providedIn;
    };

  }


}