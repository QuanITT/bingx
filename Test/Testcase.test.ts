
import Controller from "../Base/controller";
import ListView from "../Component/listView";
import { Channel } from "../Models/Channel";
import ListNews from "../Models/ListNews";
import News from "../Models/News";

describe("Controller", () => {
  it("should render news correctly", () => {
    // Arrange
    const controller = new Controller<News>();
    const channel: Channel = { name: "News Channel", icon: "icon1" };
    const news = new News("Breaking News", "news.jpg", 100, 10, channel);

    // Act
    const result = controller.render(news);

    // Assert
    const expectedHtml = `<div><h1>${news.title}</h1><img src="${news.imgUrl}" alt="Image"><p>Like: ${news.like}, Unlike: ${news.unlike}</p><p>Channel: ${news.channel.name}</p></div>`;
    expect(result).toBe(expectedHtml);
  });
});
describe("ListView", () => {
  it("should render list of news correctly", () => {
    // Arrange
    const controller = new Controller<News>();
    const channel: Channel = { name: "News Channel", icon: "icon1" };
    const listNews = new ListNews();
    listNews.addNews(new News("News 1", "news1.jpg", 100, 10, channel));
    listNews.addNews(new News("News 2", "news2.jpg", 200, 20, channel));

    const listView = new ListView(controller, listNews);

    // Act
    const result = listView.render();

    // Assert
    const news1 = listNews.getNewsList()[0];
    const news2 = listNews.getNewsList()[1];
    const expectedHtml = `<div><h1>${news1.title}</h1><img src="${news1.imgUrl}" alt="Image"><p>Like: ${news1.like}, Unlike: ${news1.unlike}</p><p>Channel: ${news1.channel.name}</p></div><div><h1>${news2.title}</h1><img src="${news2.imgUrl}" alt="Image"><p>Like: ${news2.like}, Unlike: ${news2.unlike}</p><p>Channel: ${news2.channel.name}</p></div>`;
    expect(result).toBe(expectedHtml);
  });
});
describe("ListView", () => {
  it("should render list of news with channel correctly", () => {
    // Arrange
    const controller = new Controller<News>();
    const listNews = new ListNews();
    const channel: Channel = { name: "News Channel", icon: "Icon1" };

    const news1 = new News("News 1", "news1.jpg", 100, 10, channel);
    const news2 = new News("News 2", "news2.jpg", 200, 20, channel);
    listNews.addNews(news1);
    listNews.addNews(news2);

    const listView = new ListView(controller, listNews);

    const result = listView.render();

    const expectedHtml = `<div><h1>${news1.title}</h1><img src="${news1.imgUrl}" alt="Image"><p>Like: ${news1.like}, Unlike: ${news1.unlike}</p><p>Channel: ${news1.channel.name}</p></div><div><h1>${news2.title}</h1><img src="${news2.imgUrl}" alt="Image"><p>Like: ${news2.like}, Unlike: ${news2.unlike}</p><p>Channel: ${news2.channel.name}</p></div>`;
    expect(result).toBe(expectedHtml);
  });
});

// describe("test", () => {
//   it("test component to view", () => {
//     // Tạo một DOMParser
//     const parser = new DOMParser();

//     // Tạo một chuỗi HTML giả định
//     const htmlString = '<div><p>Hello, <span>world</span>!</p></div>';
  
//     // Sử dụng DOMParser để phân tích chuỗi HTML thành DOMString
//     const doc = parser.parseFromString(htmlString, 'text/html');
  
//     // Kiểm tra xem doc có phải là một DOMString không
//     expect(doc.constructor.name).toBe('DOMString');
//   });
    
//   });
