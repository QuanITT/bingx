import { BaseModel } from "../Base/baseModel";
import Component from "../Base/component";
import ListNews from "../Models/ListNews";
import NewsView from "./newView";


class ListNewViews {
  private newsList: ListNews;
  private newsView: NewsView;

  constructor(private component: Component<BaseModel>, newsList: ListNews) {
    this.component = component;
    this.newsList = newsList;
    this.newsView = new NewsView(component);
  }

  Render(): string {
    let newsHtml = '';

    this.newsList.getNewsList().forEach(news => {
      const newsRendered = this.newsView.Render(news);
      newsHtml += newsRendered;
    });

    return newsHtml;
  }
}

export default ListNewViews;