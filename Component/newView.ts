import Controller from "../Base/controller";
import { BaseModel } from "../Base/baseModel";


class NewsView {
  constructor(private controller: Controller<BaseModel>) {
    this.controller = controller;
  }

  Render(news: BaseModel): string {
    return this.controller.Render(news);
  }
}

export default NewsView;
