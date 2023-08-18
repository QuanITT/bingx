// ListNews.ts

import News from './News';

class ListNews {
  private newsList: News[];

  constructor() {
    this.newsList = [];
  }

  addNews(news: News): void {
    this.newsList.push(news);
  }

  getNewsList(): News[] {
    return this.newsList;
  }
}

export default ListNews;
