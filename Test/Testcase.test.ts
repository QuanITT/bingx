import Component from "../View/component";
import AppController from "../Controller/controller";
import { Channel } from "../Models/Channel";
import ListNews from "../Models/ListNews";
import News from "../Models/News";
import { BaseComponent } from "../View/baseComponent";
import { ComponentDecorator } from "../Base/decorator";

describe("Controller", () => {
  it("should render news correctly", () => {
    // Arrange
    const component = new Component();
    const channel: Channel = { name: "News Channel", icon: "icon1" };
    const news = new News("Breaking News", "news.jpg", 100, 10, channel);
    component.addNews(news);
    // Act
    const result = component.RenderHTML(news);

    // Assert
    const expectedHtml = `<div><h1>${news.title}</h1><img src="${news.imgUrl}" alt="Image"><p>Like: ${news.like}, Unlike: ${news.unlike}</p><p>Channel: ${news.channel.name}</p></div>`;
    expect(result).toBe(expectedHtml);
  });
});
describe("ListView", () => {
  it("should render list of news correctly", () => {
    // Arrange
    const component = new Component();
    const channel: Channel = { name: "News Channel", icon: "icon1" };
    component.addNews(new News("News 1", "news1.jpg", 100, 10, channel));
    component.addNews(new News("News 2", "news2.jpg", 200, 20, channel));

    // Act
    const result = component.RenderListNews();

    // Assert
    const news1 = component.getNewsList()[0];
    const news2 = component.getNewsList()[1];
    const expectedHtml = `<div><h1>${news1.title}</h1><img src="${news1.imgUrl}" alt="Image"><p>Like: ${news1.like}, Unlike: ${news1.unlike}</p><p>Channel: ${news1.channel.name}</p></div><div><h1>${news2.title}</h1><img src="${news2.imgUrl}" alt="Image"><p>Like: ${news2.like}, Unlike: ${news2.unlike}</p><p>Channel: ${news2.channel.name}</p></div>`;
    expect(result).toBe(expectedHtml);
  });
});
//create test root element
describe("Root to news", () => {
  it("Should root view app controller component", () => {
    const app = new AppController();

    const channel: Channel = { name: "News Channel", icon: "icon1" };
    app.component.addNews(new News("News 1", "news1.jpg", 100, 10, channel));
    app.component.addNews(new News("News 1", "news1.jpg", 100, 10, channel));
    app.component.addNews(new News("News 1", "news1.jpg", 100, 10, channel));

    const result = app.component.RenderListNews();

    const news1 = app.component.getNewsList()[0];
    const news2 = app.component.getNewsList()[1];
    const news3 = app.component.getNewsList()[2];

    const expectedHtml = `<div><h1>${news1.title}</h1><img src="${news1.imgUrl}" alt="Image"><p>Like: ${news1.like}, Unlike: ${news1.unlike}</p><p>Channel: ${news1.channel.name}</p></div><div><h1>${news2.title}</h1><img src="${news2.imgUrl}" alt="Image"><p>Like: ${news2.like}, Unlike: ${news2.unlike}</p><p>Channel: ${news2.channel.name}</p></div><div><h1>${news3.title}</h1><img src="${news3.imgUrl}" alt="Image"><p>Like: ${news3.like}, Unlike: ${news3.unlike}</p><p>Channel: ${news3.channel.name}</p></div>`;
    expect(result).toBe(expectedHtml);
  });
});
describe("@component", () => {
  it("Should test Selector, Template, style  ", () => {
    const controller = new BaseComponent();
    controller.selector = "app-root";
    controller.template = "<h3>wqehjqjjkqweh</h3>";
    controller.style = "h1{color:red}";
    const result = controller.RenderHTML();
    const expectedHtml = controller.template;
    expect(result).toBe(expectedHtml);
  });
});
describe("@component", () => {
  it("Should Render Data for template  ", () => {
    const component = new BaseComponent();    
    const channel: Channel = { name: "News Channel", icon: "icon1" };
    component.addNews(new News("News 1", "news1.jpg", 100, 10, channel));

    component.selector = "app-root";
    component.style = "h1{color:red}";
    component.data = component._newsList[0];  
    component.template = `<p>hehehee</p><div>${component.data.title}${component.data.like}</div>`;
    const result = component.RenderHTML();
    const expectedHtml = component.template;
    expect(result).toBe(expectedHtml);
  });
});
describe("@component", () => {
  it("Should Render Data for template < Builder > and Data for News  ", () => {
    const component = new BaseComponent<News>;    
    const channel: Channel = { name: "News Channel", icon: "icon1" };
    component.addNews(new News("News 1", "news1.jpg", 100, 10, channel));
    component.data = component._newsList[0];  
    const build = component
                          .buildSelector("news-view")
                          .buildStyle("app-root")
                          .buildModel(News)
                          .buildTemplate(`<p>hehehee</p><div>${component.data.title}${component.data.like}</div>`)
                          .appBuild();

    expect(build).toBe("<p>hehehee</p><div>News 1100</div>");
  });
});
describe("Test Decorator", () => {
  it("should decorator works properly", () => {
    @ComponentDecorator({
      selector: "news",
      template: "<div>{{title}}</div>",
      style: "h1{color:red}",
    })
    class NewsComponent {
      title = "Hello";
      build() {
        let view = (this as any).template;
        for (let key in this) {
          view = view.replace(`{{${key}}}`, this[key]);  
        }
        return view;
      }
    }

    const news = new NewsComponent().build();

    expect(news).toBe("<div>Hello</div>");
  });
});
