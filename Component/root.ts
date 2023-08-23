import { Channel } from "../Models/Channel";
import News from "../Models/News";
import AppController from "./controller";


const app = new AppController();
const channel: Channel = { name: 'News Channel', icon: 'icon1' };

app.addNewsToNewsList('Latest News', 'news.jpg', 100, 10,channel);
app.addNewsToNewsList('Breaking News', 'breaking.jpg', 200, 20,channel);
app.addNewsToNewsList('Featured Story', 'featured.jpg', 150, 5,channel);

const listViewHtml = app.RenderListView();
const newsHtml = app.RenderNewsView(new News('Single News', 'single.jpg', 50, 2,channel));

//reading file news from Json, URL
const readingFile = app.ReadingFile();
console.log(newsHtml);
console.log(listViewHtml);
console.log(readingFile);