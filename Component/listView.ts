import Controller from "../Base/controller";
import { BaseModel } from "../Base/baseModel";
import ListNews from "../Models/ListNews";
import NewsView from "./newView";

class ListView {
  private newsList: ListNews;
  private newsView: NewsView;

  constructor(private controller: Controller<BaseModel>, newsList: ListNews) {
    this.controller = controller;
    this.newsList = newsList;
    this.newsView = new NewsView(controller);
  }

  render(): string {
    let newsHtml = "";
    this.newsList.getNewsList().forEach((news) => {
      const newsRendered = this.newsView.render(news);
      newsHtml += newsRendered;
    });
    return newsHtml;
  }
}

export default ListView;
