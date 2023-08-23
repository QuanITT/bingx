import { Channel } from '../Models/Channel';

import { BaseModel } from "../Base/baseModel";
import ListNews from "../Models/ListNews";
import News from "../Models/News";
import ListView from "./listView";
import Component from '../Base/component';

class AppController {

  private component: Component<BaseModel>;
  private newsList: ListNews;
  private listView: ListView;

  constructor() {
    this.component = new Component();
    this.newsList = new ListNews();
    this.listView = new ListView(this.component, this.newsList);
  }

  addNewsToNewsList(title: string, imgUrl: string, like: number, unlike: number,Channel:Channel): void {
    const news = new News(title, imgUrl, like, unlike,Channel);
    this.newsList.addNews(news);
  }

  RenderListView(): string {
    return this.listView.Render();
  }
  RenderNewsView(news: BaseModel) :string {
   return this.component.Render(news)
}
ReadingFile() {
    throw new Error("Method not implemented.");
}
}

export default AppController;