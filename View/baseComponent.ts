import { BaseModel } from "../Base/baseModel";
import News from "../Models/News";

export class BaseComponent {
  newsList: News[];

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
}
