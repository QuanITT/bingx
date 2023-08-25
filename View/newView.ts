import { BaseModel } from "../Base/baseModel";
import News from "../Models/News";
import Component from "./component";
class NewsView {
  constructor(private component: Component<BaseModel>) {
    this.component = component;
  }

  RenderToElement(news:News) {
    const container = document.getElementById('News-Class');
    if (container) {
      container.innerHTML = this.component.RenderHTML(news);
    }
  }
}

export default NewsView;