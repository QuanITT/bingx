import { PARAMTYPES_METADATA } from "./constants";
import { ComponentMetadata } from "./decorator";

/* eslint-disable  @typescript-eslint/no-explicit-any */
export interface Component extends Function {
  new (...args: any[]): any;
}

export class BaseComponent {
  static getMetadata(): ComponentMetadata | undefined {
    return Reflect.getMetadata(PARAMTYPES_METADATA, this);
  }  

}