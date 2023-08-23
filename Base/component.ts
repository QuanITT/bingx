import { Channel } from "../Models/Channel";
import { BaseModel } from "./baseModel";
  class Component<T extends BaseModel> {
    Render(model: T): string {
      const container =`<div><h1>${model.title}</h1><img src="${model.imgUrl}" alt="Image"><p>Like: ${model.like}, Unlike: ${model.unlike}</p><p>Channel: ${model.channel.name}</p></div>`;
      return container;
    }
  }
  
  export default Component;
  