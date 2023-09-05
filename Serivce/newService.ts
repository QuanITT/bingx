import { InjectableMetadata } from "../Base/decorator";

@InjectableMetadata({
    providedIn: 'root'
})
export class NewsService {
    getNews() {
      return "news";
    }
 


}