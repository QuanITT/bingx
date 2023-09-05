import { Component } from "../Base/component";
import { Declare } from "../Base/declare";
import { Service } from "../Base/service";
import { ReflectHelper } from "../helper/reflectHelper";
import { Render } from "../helper/render";


export class AppModule {

  private declaration: Declare;
  private rootComponent!: Component;
  private renderer: Render;
  private reflectHelper: ReflectHelper;

  constructor() {
    this.declaration = {};
    this.renderer = new Render();
    this.reflectHelper = new ReflectHelper();
  }

  getDeclaration(): Declare{
    return this.declaration
  }

  declareComponents(...components: Component[]): void {
    for (const component of components) {
      const selector = this.reflectHelper.getMetadata(component).selector.toUpperCase();
      this.declaration[selector] = component;
    }
  }
  declareService(...services: Service[]) {
    for (const service of services) {
      const provider = this.reflectHelper.getMetadata(service).providedIn.toUpperCase();
      this.declaration[provider] = service;
    }
}

  setRootComponent(component: Component): void {
    this.rootComponent = component;
  }

  run(): string {
    const rootSelector = this.reflectHelper.getMetadata(this.rootComponent).selector;
    return this.renderer.renderRoot(rootSelector, this.declaration);
  }
}