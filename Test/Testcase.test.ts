import "reflect-metadata";
import News from "../Models/News";
import { BaseComponent } from "../View/baseComponent";
import { ComponentDecorator } from "../Base/decorator";
import { AppModule } from "../Controller/appmodule";
import { NewsComponent } from "../View/newView";
import { AppComponent } from "../View/app";
import { ChannelComponent } from "../View/channel";
import { NewsService } from "../Serivce/newService";
import { Component } from "../Base/component";

//create test root element
describe("@component", () => {
  it("Should Render Data for template < Builder > and Data for News  ", () => {
    const component = new BaseComponent<News>();
    const build = component
      .buildSelector("news-view")
      .buildStyle("app-root")
      .buildModel(News)
      .buildTemplate(`<p>hehehee</p><div></div>`)
      .appBuild();

    expect(build).toBe("<p>hehehee</p><div></div>");
  });
});
describe("Test Decorator", () => {
  it("should decorator", () => {
    @ComponentDecorator({
      selector: "news",
      template: "<div>{{title}}</div>",
      style: "h1{color:red}",
    })
    class NewsComponent {
      title = "Hello";
      build() {
        let view = (this as any).template;
        for (let key in this) {
          view = view.replace(`{{${key}}}`, this[key]);
        }
        return view;
      }
    }

    const news = new NewsComponent().build();

    expect(news).toBe("<div>Hello</div>");
  });
});

describe("Test Module Controller", () => {
  it("should Controleer", () => {
    const appModule = new AppModule();
    let componentList: Component[] = [];
    let serviceList: Component[] = [];
    appModule.declareComponent(NewsComponent);
    appModule.declareComponent(ChannelComponent);
    appModule.declareService(NewsService);

    expect(appModule.declaretion["news"]).toBeTruthy();
    expect(appModule.declaretion["channel"]).toBeTruthy();
    expect(appModule.declaretion["root"]).toBeTruthy();

    //componentList = appModule.declareComponent(ChannelComponent, NewsComponent);
    //serviceList = appModule.declaretion["root"];
    const service = appModule.declaretion["root"];
    service.constructor();
    for (let key in componentList) {
      const element = componentList[key];
      const a = element.constructor;

      expect(a).toBe("News");
    }
  });
});

/// DI test
describe("Test Inject decorator", () => {
  it("should @injecable", () => {
    expect(NewsService.prototype.providedIn).toBe("root");
  });
});
// test provider in component

describe("Test Decorator", () => {
  it("should decorator", () => {
    @ComponentDecorator({
      selector: "news",
      template: "<div>{{title}}</div>",
      style: "h1{color:red}",
      provider: [NewsService],
    })
    class NewsComponent {
      static selector(selector: string) {
          return selector;
      }
      title = "Hello";
      constructor() {}
      build() {
        let view = (this as any).template;
        for (let key in this) {
          view = view.replace(`{{${key}}}`, this[key]);
        }
        return view;
      }
    }
    it('should have the correct selector', () => {
      expect(NewsComponent.selector).toBe('news');
    });
  });
});
