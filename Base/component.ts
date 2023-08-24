import ListNews from "../Models/ListNews";
import News from "../Models/News";
  class Component {
    public newsList: ListNews;
    constructor( newsList: ListNews){
      this.newsList = newsList;
    }

    RenderHTML(model: News): string {
      const container =`<div><h1>${model.title}</h1><img src="${model.imgUrl}" alt="Image"><p>Like: ${model.like}, Unlike: ${model.unlike}</p><p>Channel: ${model.channel.name}</p></div>`;
      return container;
    }
    RenderListNews(): string {
      let newsHtml = '';
  
      this.newsList.getNewsList().forEach(news => {
        const newsRendered = this.RenderHTML(news);
        newsHtml += newsRendered;
      });
  
      return newsHtml;
    }

  }
  
  export default Component;
  