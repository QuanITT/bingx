import { BaseModel } from "../Base/baseModel";
import ListNews from "../Models/ListNews";
import Component from '../Base/component';
import ListNewViews from "../View/listNewsViews";

class AppController {

  public component: Component<BaseModel>;
  public newsList: ListNews; // model
  public ListNewsView: ListNewViews; // view


  constructor() {
    this.component = new Component(); // component
    this.newsList = new ListNews(); // model
    this.ListNewsView = new ListNewViews(this.component, this.newsList); // control 
  }

}

export default AppController;