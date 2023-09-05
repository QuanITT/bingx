import { ComponentMetadata } from '../Base/decorator';
import { NewsService } from './../Serivce/newService';
@ComponentMetadata({
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
  
