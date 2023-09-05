import { PARAMTYPES_METADATA } from "./constants";
import { ComponentMetadata } from "./decorator";

/* eslint-disable  @typescript-eslint/no-explicit-any */
export interface Service extends Function {
  new (...args: any[]): any;
}

export class BaseService{
  static getMetadata(): ComponentMetadata | undefined {
    return Reflect.getMetadata(PARAMTYPES_METADATA, this);
  }
}