import { Channel } from "../Models/Channel";
import News from "../Models/News";
import { BaseComponent } from "./baseComponent";
import { Builder } from "./builderParten";
export class NewsComponent {
  Main() {
    const component = new BaseComponent();
    const builder = new Builder();
    const channel: Channel = { name: "News Channel", icon: "icon1" };
    component.addNews(new News("News 1", "news1.jpg", 100, 10, channel));

    const build = builder
                          .buildSelector("news-view")
                          .buildStyle("app-root")
                          .buildModel(News)
                          .buildTemplate("hehehe")
                          .getBuild(); 
    return build;



  }

  constructor() {}
}
export default NewsComponent;
