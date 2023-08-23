import { BaseModel } from "../Base/baseModel";
import Component from "../Base/component";


class NewsView {
  constructor(private component: Component<BaseModel>) {
    this.component = component;
  }

  Render(news: BaseModel): string {
    return this.component.Render(news);
  }
}

export default NewsView;