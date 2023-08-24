import { BaseModel } from "../Base/baseModel";
import ListNews from "../Models/ListNews";
import Component from '../Base/component';

class AppController {
  public component: Component; //component
  public newsList: ListNews; // model
  constructor() {
    this.newsList = new ListNews(); // model
    this.component = new Component(this.newsList); 
  }

}

export default AppController;