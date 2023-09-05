import { ComponentMetadata } from "../Base/decorator";
import { NewsService } from "../Serivce/newService";
@ComponentMetadata({
  selector: "channel",
  template: "<div>{{channel}}</div>",
  style: "h1{color:red}",
})
export class ChannelComponent {
  channel = "ABC";
  constructor(public newsService:  NewsService) {}
  
}
