export class Model<T> {
  private _data: any;
  public get data(): any {
    return this._data;
  }
  public set data(value: any) {
    this._data = value;
  }

  constructor() {}
}
