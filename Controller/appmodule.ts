import { Component } from "../Base/component";
import { NewsService } from "../Serivce/newService";
import { AppComponent } from "../View/app";

export class AppModule {
  declareService(...services: Component[]): Component[] {
    for(const service of services) {
      const providedIn = service.prototype.providedIn;
      this.declaretion[providedIn] = service;
    }
    return services;

  }
  public declaretion: { [key: string]: Component };
  private rootComponent!: Component;
  constructor() {
    this.declaretion = {};
  }

  declareComponent(...components: Component[]): Component[] {
    for (const component of components) {
      const appSelector = component.prototype.selector;
      this.declaretion[appSelector] = component;
    }
    return components;
  }

  addRoot(component: Component) {
    this.rootComponent = component;
  }

  run() {}
}
