import { NewsService } from './../Serivce/newService';
import { ComponentDecorator } from "../Base/decorator";
@ComponentDecorator({
  selector: "news",
  template: `<div>
              <p>title: {{title}}</p>
              <channel></channel>
            </div>`,
  style: "h1{color:red}",
})
export class NewsComponent {
  title = "Hello";
  constructor(private a: NewsService) {
    
  }
    
  }
  
