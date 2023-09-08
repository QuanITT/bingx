/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from "../Base/component";
import { PARAMTYPES_METADATA } from "../Base/constants";
import { Declare, Provider } from "../Base/declare";
import { Service } from "../Base/service";
import { ReflectHelper } from "../helper/reflectHelper";
import { Render } from "../helper/render";

export class AppModule {
  private declaration: Declare;
  private provider: Provider;
  private rootComponent!: Component;
  private renderer: Render;
  private reflectHelper: ReflectHelper;  
  services: Service[]

  constructor() {
    this.services = [];
    this.declaration = {};
    this.provider = {};
    this.renderer = new Render();
    this.reflectHelper = new ReflectHelper();
  }

  getDeclaration(): Declare {
    return this.declaration;
  }
  getProvider(): Provider {
    return this.provider;
  }

  declareComponents(...components: Component[]): void {
    components.forEach((component) => {
      const selector = this.reflectHelper
        .getMetadata(component)
        .selector.toUpperCase();
      this.declaration[selector] = component;
    });
  }

  declareServices(...services: Service[]):void {
    this.services = [...this.services, ...services];

  }
  //create instance injectable service array for provider
  //new instance for each service
  createInstanceProvider() {}
  setRootComponent(component: Component): void {
    this.rootComponent = component;
  }

  run(): string {
    const rootSelector = this.reflectHelper.getMetadata(
      this.rootComponent
    ).selector;
    return this.renderer.renderRoot(rootSelector, this.declaration, this.services);
  }
}
