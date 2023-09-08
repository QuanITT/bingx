import { Component } from "../Base/component";
import { Declare } from "../Base/declare";
import { bootstrap } from "../Base/injecable";
import { Service } from "../Base/service";
import { HtmlParser } from "./htmlParser";

export class Render {
  private htmlParser: HtmlParser;

  constructor() {
    this.htmlParser = new HtmlParser();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  renderRoot(rootSelector: string, declaration: Declare, services: Service[] ): string {
    document.body.innerHTML = `<${rootSelector}></${rootSelector}>`;
    this.traverse(document.body, declaration, services);
    

    return document.body.innerHTML;
  }

  private traverse(element: HTMLElement, declaration: Declare, services: Service[]): void {
    for (const key in declaration) {
      const elements = element.querySelectorAll(key);

      elements.forEach((child: Element) => {
        const componentClass = declaration[child.tagName];
        const instance = bootstrap(componentClass);
        //parse data receive from parent component if any
        instance.data = JSON.parse(child.getAttribute("data") ?? "{}");

        const newChildElement = this.htmlParser.parseToHtmlElement(this.bindData(instance));
        this.replaceChild(child as HTMLElement, newChildElement);
        this.traverse(newChildElement, declaration, services);
      });
    }
  }

  private replaceChild(element: HTMLElement, newElement: HTMLElement): void {
    const parentElement = element.parentNode;
    //functional program?
    [...newElement.children].forEach((child) => {
      parentElement?.appendChild(child);
    });
    parentElement?.removeChild(element);
  }

  bindData(instance: InstanceType<Component>): string {
    const view = this.interpolateText(instance);
    const componentHtml = this.bindDataToAttribute(instance, view);
    return componentHtml.outerHTML;
  }

  private bindDataToAttribute(instance: InstanceType<Component>, view: string): HTMLElement {
    const componentHtml = this.htmlParser.parseToHtmlElement(view);

    const elements = componentHtml.querySelectorAll("[data]");
    elements.forEach((element) => {
      const dataKey = element.getAttribute("data") || "";
      element.setAttribute("data", JSON.stringify(instance[dataKey]));
    });

    return componentHtml;
  }

  private interpolateText(instance: InstanceType<Component>): string {
    let view = instance.constructor.getMetadata().template;

    for (const prop  in instance) {
      if (typeof instance[prop ] === "object") {
        for (const k in instance[prop ]) {
          view = view.replace(`{{${prop }.${k}}}`, instance[prop ][k]);
        }
      } else {
        view = view.replace(`{{${prop }}}`, instance[prop ]);
      }
    }

    return view;
  }
}  