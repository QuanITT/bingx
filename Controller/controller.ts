import { BaseModel } from "../Base/baseModel";
import ListNews from "../Models/ListNews";
import Component from '../Base/component';
import ListView from '../View/listView';

class AppController {

  private component: Component<BaseModel>;
  private newsList: ListNews; // model
  private listView: ListView; // view

  constructor() {
    this.component = new Component(); // component
    this.newsList = new ListNews(); // model
    this.listView = new ListView(this.component, this.newsList); // control 
  }
}

export default AppController;