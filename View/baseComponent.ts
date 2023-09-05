/* eslint-disable  @typescript-eslint/no-explicit-any */
export class BaseComponent {
  private _setselector: string;
  private _settemplate: string;
  private _setstyle: string;
  private _data: any;

  constructor() {
    this._setselector = "";
    this._settemplate = "";
    this._setstyle = "";
    this._data = {};
  }

  public get data() {
    return this._data;
  }
  public set data(model: any) {
    this._data = model;
  }

  public get selector(): string {
    return this._setselector;
  }

  public set selector(value: string) {
    this._setselector = value;
  }

  public get template(): string {
    return this._settemplate;
  }
  public set template(value: string) {
    this._settemplate = value;
  }

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
    this.style = style;
  }
  setSelector(selector: string) {
    this.selector = selector;
  }
  setTemplate(template: string) {
    return (this.template = template);
  }
  setData(data: any) {
    return data;
  }
  //builder pattern
  buildSelector(value: string) {
    this.setSelector(value);
    return this;
  }

  buildTemplate(value: string) {
    this.setTemplate(value);
    return this;
  }

  buildModel(value: any) {
    this.setData(value);
    return this;
  }

  buildStyle(value: string) {
    this.setStyles(value);
    return this;
  }
  appBuild() {
    this.RenderHTML();
    return this.template;
  }
  build() {
    return this.RenderHTML();
  }
}
export default BaseComponent;
