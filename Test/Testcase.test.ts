import Component from "../Base/component";
import Controller from "../Base/component";
import AppController from "../Controller/controller";
import { Channel } from "../Models/Channel";
import ListNews from "../Models/ListNews";
import News from "../Models/News";
import ListView from "../View/listNewsViews";

describe("Controller", () => {
  it("should render news correctly", () => {
    // Arrange
    const controller = new Controller<News>();
    const channel: Channel = { name: "News Channel", icon: "icon1" };
    const news = new News("Breaking News", "news.jpg", 100, 10, channel);

    // Act
    const result = controller.Render(news);

    // Assert
    const expectedHtml = `<div><h1>${news.title}</h1><img src="${news.imgUrl}" alt="Image"><p>Like: ${news.like}, Unlike: ${news.unlike}</p><p>Channel: ${news.channel.name}</p></div>`;
    expect(result).toBe(expectedHtml);
  });
});
describe("ListView", () => {
  it("should render list of news correctly", () => {
    // Arrange
    const component = new Component<News>();
    const listNews = new ListNews();

    const channel: Channel = { name: "News Channel", icon: "icon1" };
    listNews.addNews(new News("News 1", "news1.jpg", 100, 10, channel));
    listNews.addNews(new News("News 2", "news2.jpg", 200, 20, channel));

    const listView = new ListView(component, listNews);

    // Act
    const result = listView.Render();

    // Assert
    const news1 = listNews.getNewsList()[0];
    const news2 = listNews.getNewsList()[1];
    const expectedHtml = `<div><h1>${news1.title}</h1><img src="${news1.imgUrl}" alt="Image"><p>Like: ${news1.like}, Unlike: ${news1.unlike}</p><p>Channel: ${news1.channel.name}</p></div><div><h1>${news2.title}</h1><img src="${news2.imgUrl}" alt="Image"><p>Like: ${news2.like}, Unlike: ${news2.unlike}</p><p>Channel: ${news2.channel.name}</p></div>`;
    expect(result).toBe(expectedHtml);
  });
});

//create test root element
describe("Root to news", () => {
  it("Should root view app controller component", () => {
    const app = new AppController();

  const channel: Channel = { name: "News Channel", icon: "icon1" };
  app.newsList.addNews(new News("News 1", "news1.jpg", 100, 10, channel));
  app.newsList.addNews(new News("News 1", "news1.jpg", 100, 10, channel));
  app.newsList.addNews(new News("News 1", "news1.jpg", 100, 10, channel));

  app.ListNewsView = new ListView(app.component, app.newsList);

  const result = app.ListNewsView.Render();

  const news1 = app.newsList.getNewsList()[0];
  const news2 = app.newsList.getNewsList()[1];
  const news3 = app.newsList.getNewsList()[2];

  const expectedHtml = `<div><h1>${news1.title}</h1><img src="${news1.imgUrl}" alt="Image"><p>Like: ${news1.like}, Unlike: ${news1.unlike}</p><p>Channel: ${news1.channel.name}</p></div><div><h1>${news2.title}</h1><img src="${news2.imgUrl}" alt="Image"><p>Like: ${news2.like}, Unlike: ${news2.unlike}</p><p>Channel: ${news2.channel.name}</p></div><div><h1>${news3.title}</h1><img src="${news3.imgUrl}" alt="Image"><p>Like: ${news3.like}, Unlike: ${news3.unlike}</p><p>Channel: ${news3.channel.name}</p></div>`;
  expect(result).toBe(expectedHtml);
  });
  
});
