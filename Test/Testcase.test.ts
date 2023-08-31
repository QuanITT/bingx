import 'reflect-metadata';
import News from "../Models/News";
import { BaseComponent } from "../View/baseComponent";
import { ComponentDecorator } from "../Base/decorator";
import { AppModule } from "../Controller/appmodule";
import { NewsComponent } from "../View/newView";
import { AppComponent } from "../View/app";
import { ChannelComponent } from "../View/channel";
import { NewsService } from "../Serivce/newService";
import { reflect } from '../node_modules/tst-reflect/dist/reflect';
import { Component } from '../Base/component';

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
    appModule.declareComponent(NewsComponent);
    componentList = appModule.declareComponent(ChannelComponent);
    componentList = appModule.declareComponent(NewsComponent);


    componentList.forEach(element => {
      //  let abc =   Reflect.getPrototypeOf(element);
      //   expect(abc).toBe(BaseComponent);

      expect(element.prototype.constructor).toBeDefined();

      const newsComponent = new element(new NewsService());

      expect(newsComponent.newsService).toBeDefined();

      expect(newsComponent.newsService instanceof NewsService).toBe(true);
      
      const news = newsComponent.newsService.getNew();

      expect(news).toBe("news");


        
    });

    expect(appModule.declaretion["news"]).toBeTruthy();
  });
});

/// DI test
describe("Test Inject decorator", () => {
  it("should @injecable", () => {
    expect(NewsService.prototype.providedIn).toBe("root");
  });
});