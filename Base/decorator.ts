import { Component } from "./component";
import "reflect-metadata";
import { PARAMTYPES_METADATA } from "./constants";
/* eslint-disable  @typescript-eslint/no-explicit-any */
interface ComponentInjectable {
  providedIn: string;
}
export function InjectableMetadata(metadata: ComponentInjectable) {
  return (target: Component) => {
    Reflect.defineMetadata(PARAMTYPES_METADATA, metadata, target);

  };
}

export interface ComponentMetadata {
  selector: string;
  template: string;
  style: string;
  provider?: any[];
}
export function ComponentMetadata(metadata: ComponentMetadata) {
  return (target: Component) => {
    Reflect.defineMetadata(PARAMTYPES_METADATA, metadata, target);
  };
}
