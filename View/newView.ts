import { BaseModel } from "../Base/baseModel";
import Component from "../Base/component";
import News from "../Models/News";


class NewsView {
  constructor(private component: Component<BaseModel>) {
    this.component = component;
  }

  HtmlString(news:News) {
    this.component.RenderHTML(news);
  }
}

export default NewsView;