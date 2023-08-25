import { Channel } from "../Models/Channel";
import News from "../Models/News";
import { BaseComponent } from "./baseComponent";
 export class NewsComponent{
  Main(){
    const component = new BaseComponent();    
    const channel: Channel = { name: "News Channel", icon: "icon1" };
    component.addNews(new News("News 1", "news1.jpg", 100, 10, channel));

    const NewsView = new BaseComponent();
    NewsView.setSelector("news-view");
    NewsView.data = component.newsList[0];
    NewsView.setTemplate(`<p>hehehee</p><div>${component.data.title}${component.data.like}</div>`);
    NewsView.setStyles("color: red; font-size: 20px;");
    NewsView.RenderHTML();
    NewsView.build();
  }
  constructor () {}
 
};
export default NewsComponent;
