import { BaseModel } from "../Base/baseModel";
import Component from '../View/component';
import News from "../Models/News";

class AppController {
  public component: Component<News>; //component
  constructor() {
    this.component = new Component();
  }

}

export default AppController;