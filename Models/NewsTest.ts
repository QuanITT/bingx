class News {
    imgUrl: string;
    title: string;
    like: number;
    unlike: number;
    channel: Channel;
  
    constructor(title: string, imgUrl: string, like: number, unlike: number, channel: Channel) {
      this.title = title;
      this.imgUrl = imgUrl;
      this.like = like;
      this.unlike = unlike;
      this.channel = channel;
    }
  }
  
  class Channel {
    name: string;
    icon : string;
  
    constructor(name: string,icon:string) {
      this.name = name;
      this.icon = icon;
    }
  }
  
  export { News, Channel };
  