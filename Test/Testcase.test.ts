import News from "../Models/News";
import { BaseComponent } from "../View/baseComponent";
import { ComponentDecorator } from "../Base/decorator";
import { AppModule } from "../Controller/appmodule";
import { NewsComponent } from "../View/newView";
import { AppComponent } from "../View/app";
import { ChannelComponent } from "../View/channel";

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
    appModule.declareComponent(NewsComponent);
    

    expect(appModule.declaretion["news"]).toBeTruthy();

  });  
});

describe("Test Module Controller", () => {
  it("should Controleer rennder", () => {
    const appModule = new AppModule();

    appModule.addRoot(AppComponent);
    appModule.declareComponent(AppComponent,NewsComponent,ChannelComponent);

    const result  = appModule.run();

    expect(result).toContain(`<div>News</div>`);
    expect(result).toContain(`<div>ABC</div>`);

  });
});

