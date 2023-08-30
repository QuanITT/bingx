import { Channel } from "./Channel";

class News   {
  public newsList: News[];
  title: string;
  imgUrl: string;
  like: number;
  unlike: number;
  channel: Channel;

  constructor(
    title: string,
    imgUrl: string,
    like: number,
    unlike: number,
    channel: Channel
  ) {
    this.title = title;
    this.imgUrl = imgUrl;
    this.like = like;
    this.unlike = unlike;
    this.channel = channel;
    this.newsList = [];
  }

  addNews(item: News) {
    this.newsList.push(item);
  }
}

export default News;
