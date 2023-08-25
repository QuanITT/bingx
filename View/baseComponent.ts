export class BaseComponent {
  constructor() {
    this._setselector = "";
    this._settemplate = "";
    this._setstyle = "";
  }
  private _data: any;
  public get data(): any {
    return this._data;
  }
  public set data(value: any) {
    this._data = value;
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
