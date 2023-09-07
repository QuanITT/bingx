import { Component } from "../Base/component";
import { Declare, Provider } from "../Base/declare";
import { Service } from "../Base/service";
import { ReflectHelper } from "../helper/reflectHelper";
import { Render } from "../helper/render";


export class AppModule {

  private declaration: Declare;
  private provider: Provider;
  private rootService!: Service;
  private rootComponent!: Component;
  private renderer: Render;
  private reflectHelper: ReflectHelper;

  constructor() {
    this.declaration = {};
    this.provider = {};
    this.renderer = new Render();
    this.reflectHelper = new ReflectHelper();
  }

  getDeclaration(): Declare{
    return this.declaration
  }
  getProvider(): Provider {
    return this.provider
  }
  

  declareComponents(...components: Component[]): void {
    components.forEach((component) => { 
      const selector = this.reflectHelper.getMetadata(component).selector.toUpperCase();
      this.declaration[selector] = component;
    });
  }
  declareService(...services: Service[]):void {
    services.forEach((service) => {
      const provider = this.reflectHelper.getMetadataSerivce(service).providedIn.toUpperCase();
      this.provider[provider] = service;
     });
}

  setRootComponent(component: Component): void {
    this.rootComponent = component;
  }

  CreateNewService(){
    const rootService = this.reflectHelper.getMetadataSerivce(this.rootService).providedIn;
    this.rootService = new rootService();
  }


  run(): string {
    this.CreateNewService();
    const rootSelector = this.reflectHelper.getMetadata(this.rootComponent).selector;
    return this.renderer.renderRoot(rootSelector, this.declaration);

  }
}