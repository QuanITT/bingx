import { BaseModel } from '../Base/baseModel';
import ListNews from "../Models/ListNews";
import News from "../Models/News";
  class Component< T extends BaseModel> {
    public newsList: News[];
    constructor(){
      this.newsList = [];
    }

    RenderHTML(model: News): string {
      const container =`<div><h1>${model.title}</h1><img src="${model.imgUrl}" alt="Image"><p>Like: ${model.like}, Unlike: ${model.unlike}</p><p>Channel: ${model.channel.name}</p></div>`;
      return container;
    }
    RenderListNews(): string {
      let newsHtml = '';
      this.newsList.forEach(news => {
        const newsRendered = this.RenderHTML(news);
        newsHtml += newsRendered;
      });
  
      return newsHtml;
    }

    addNews(news: News): void {
      this.newsList.push(news);
    }
  
    getNewsList():News[] {
      return this.newsList;
    }

 

  }
  
  export default Component;
  