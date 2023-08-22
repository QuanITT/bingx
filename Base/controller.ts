import { BaseModel } from "../Base/baseModel";
class Controller<T extends BaseModel> {
  render(model: T): string {
    const container = `<div><h1>${model.title}</h1><img src="${model.imgUrl}" alt="Image"><p>Like: ${model.like}, Unlike: ${model.unlike}</p><p>Channel: ${model.channel.name}</p></div>`;
    return container;
  }
  getData(model: T) {
    return {
      title: model.title,
      imgUrl: model.imgUrl,
      like: model.like,
      unlike: model.unlike,
      channelName: model.channel.name,
      channelicon: model.channel.icon,
    };
  }
}
// bootrap apps. 
// 
export default Controller;
