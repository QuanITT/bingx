import { Channel } from './../Models/Channel';

import Controller from "../Base/controller";
import { BaseModel } from "../Base/baseModel";
import ListNews from "../Models/ListNews";
import News from "../Models/News";
import ListView from "./listView";

class AppComponent {

  private controller: Controller<BaseModel>;
  private newsList: ListNews;
  private listView: ListView;

  constructor() {
    this.controller = new Controller();
    this.newsList = new ListNews();
    this.listView = new ListView(this.controller, this.newsList);
  }

  addNewsToNewsList(title: string, imgUrl: string, like: number, unlike: number,Channel:Channel): void {
    const news = new News(title, imgUrl, like, unlike,Channel);
    this.newsList.addNews(news);
  }

  RenderListView(): string {
    return this.listView.Render();
  }
  RenderNewsView(news: BaseModel) :string {
   return this.controller.Render(news)
}
ReadingFile() {
    throw new Error("Method not implemented.");
}
}

export default AppComponent;
