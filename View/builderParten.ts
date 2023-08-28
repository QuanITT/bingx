import BaseComponent from "./baseComponent";

export class Builder { 
    private component: BaseComponent;;

    constructor() { 
        this.component = new BaseComponent();
    }

    buildSelector(selector: string) {
        this.component.setSelector(selector);
        return this;
      }
    
      buildTemplate(template: string) {
        this.component.setTemplate(template);
        return this;
      }
    
      buildModel(model: any) {
        this.component.setData(model);
        return this;
      }
    
      buildStyle(style: string) {
        this.component.setStyles(style);
        return this;
      }
      getBuild() {
        return this.component;
      }
}