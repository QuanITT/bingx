import { BaseModel } from "../Base/baseModel";
import { Channel } from "./Channel";

class News implements BaseModel {
  imgUrl: string;
  title: string;
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
  }
}

export default News;
