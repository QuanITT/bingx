import { Component } from "./component";
import "reflect-metadata";

export function ComponentDecorator(config: {
  selector: string;
  template: string;
  style: string;
}) {
  return function (target: Function) {
    target.prototype.selector = config.selector;
    target.prototype.template = config.template;
    target.prototype.style = config.style;
  };
}

export function Injectable(config: { providedIn: string }) {
  return function (target: Function) {
    target.prototype.providedIn = config.providedIn;
  };
}

//new

interface ComponentInjectable {
  providedIn: string;
}

export function InjectableMetadata(metadata: ComponentInjectable) {
  return (target: Component) => {
    // Reflect.defineMetadata("componentMetadata", metadata, target);
  };
}
