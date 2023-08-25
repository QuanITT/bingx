import { Model } from "../Base/Model";
import News from "../Models/News";

export class BaseComponent {
  build() {
    return this.RenderHTML();
  }
  //   private model: Model<News>;
  //  new component builder : = > .setselector => .settemplate => .setstyle => .setdata => .buid
  public newsList: News[];
  addNews(news: News) {
    this.newsList.push(news);
  }
  constructor() {
    this._setselector = "";
    this._settemplate = "";
    this._setstyle = "";
    this.newsList = [];
  }
  public _data: any;

  public get data(): News {
    return this._data;
  }
  public set data(model: News) {
    this._data = model;
  }

  private _setselector: string;

  public get selector(): string {
    return this._setselector;
  }

  public set selector(value: string) {
    this._setselector = value;
  }
  private _settemplate: string;

  public get template(): string {
    return this._settemplate;
  }
  public set template(value: string) {
    this._settemplate = value;
  }
  private _setstyle: string;

  public get style(): string {
    return this._setstyle;
  }
  public set style(value: string) {
    this._setstyle = value;
  }

  RenderHTML(): string {
    return this.template;
  }
  setStyles(style: string) {
    return this.style;
  }
  setSelector(selector: string) {
    return this.selector;
  }
  setTemplate(template:string) {
    return this.template; 
  }
}
export default BaseComponent;
