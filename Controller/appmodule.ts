import { Component } from "../Base/component";
import { AppComponent } from "../View/app";

export class AppModule {

  public declaretion: { [key: string]: Component };
  private rootComponent!: Component;
  constructor() {
    this.declaretion = {};
  }


  declareComponent(...components: Component[]) {
    for (const component of components) {
      const appSelector = component.prototype.selector;
      this.declaretion[appSelector] = component;
    }
  }


  addRoot(component: Component) {
    this.rootComponent = component;
  }

  run() {
    
  }
}
