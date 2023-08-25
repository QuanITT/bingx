import { Model } from "../Base/Model";
import News from "../Models/News";

export class BaseComponent {
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
  public get setselector(): string {
    return this._setselector;
  }
  public set setselector(value: string) {
    this._setselector = value;
  }
  private _settemplate: string;
  public get settemplate(): string {
    return this._settemplate;
  }
  public set settemplate(value: string) {
    this._settemplate = value;
  }
  private _setstyle: string;
  public get setstyle(): string {
    return this._setstyle;
  }
  public set setstyle(value: string) {
    this._setstyle = value;
  }

  RenderHTML(): string {
    return this.settemplate;
  }
}
