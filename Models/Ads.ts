import { AdSource } from "./AdSource";

export class Ads {
  private imgUrl: string;
  private publishedAt: string;
  private title: string;
  private ads: AdSource;
  constructor(
    ads: AdSource,
    title: string,
    imgUrl: string,
    publishedAt: string
  ) {
    this.title = title;
    this.imgUrl = imgUrl;
    this.publishedAt = publishedAt;
    this.ads = ads;
  }
}
