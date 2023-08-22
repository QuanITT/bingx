import Controller from "../Base/controller";
import { BaseModel } from "../Base/baseModel";

class NewsView {
  constructor(private controller: Controller<BaseModel>) {
    this.controller = controller;
  }

  render(news: BaseModel): string {
    return this.controller.render(news);
  }
}

export default NewsView;
