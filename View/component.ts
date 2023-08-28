import { BaseModel } from '../Base/baseModel';
import ListNews from "../Models/ListNews";
import News from "../Models/News";
import { BaseComponent } from './baseComponent';
  class Component< BaseModel> {
    public newsList: News[];
    private component = new BaseComponent();
    constructor(){
      this.newsList = [];
    }

    RenderHTML(model: News): string {
      const container =`<div><h1>${model.title}</h1><img src="${model.imgUrl}" alt="Image"><p>Like: ${model.like}, Unlike: ${model.unlike}</p><p>Channel: ${model.channel.name}</p></div>`;
      return container;
    }
    // class component 
    // @Component Selector, template, ... 
    // Buider -> extend component @component
    // route -> list @component 
     // builder all. 
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
  