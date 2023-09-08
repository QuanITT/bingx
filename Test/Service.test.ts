import { BaseComponent } from "../Base/component";
import { ComponentMetadata } from "../Base/decorator";
import { AppModule } from "../Controller/appmodule";
import { NewsService } from "../Serivce/newService";
import { bootstrap } from '../Base/injecable';

describe("Test declarations Component and service", () => {
  let app: AppModule;
  @ComponentMetadata({
    selector: "news",
    template: "<div>{{title}}</div>",
    style: "h1{color:red}",
    provider: [NewsService],
  })
  class NewsComponent {
    constructor(private newsService: NewsService) {
        const a = this.newsService.getNews();
        this.title = a;
    }
    title = "news";
  }

  it("should component be declared component and service", () => {
    app = new AppModule();
    app.declareComponents(NewsComponent);
    app.declareServices(NewsService);
    expect(app.getDeclaration()["NEWS"]).toBeTruthy();

    expect(app.services[0].name).toBe("NewsService");
  });
});

//test renderAppComponent

describe("Test render app component", () => {
  let app: AppModule;
  @ComponentMetadata({
    selector: "app-root",
    template: `
        <div><p>Welcome to my app!</p></div>
        <div>{{title}}</div>
      `,
    style: "h1{color:red}",
  })
  class AppComponent extends BaseComponent {
    constructor(private myService: NewsService) {
      super();
      this.title = this.myService.getNews();
  
    }
    title = "";
  }


  it("should app module render app component", () => {
    app = new AppModule();
    app.setRootComponent(AppComponent);
    app.declareComponents(AppComponent);
    app.declareServices(NewsService)

    const result = app.run();

    expect(result).toContain("<div><p>Welcome to my app!</p></div>");
    expect(result).toContain("news");
  });
});



describe("Test render app component", () => {
  let app: AppModule;
  @ComponentMetadata({
    selector: "app-root",
    template: `
        <div><p>Welcome to my app!</p></div>
        <div>{{title}}</div>
      `,
    style: "h1{color:red}",
    provider: [NewsService],
  })
  class AppComponent extends BaseComponent {
    constructor(private myService: NewsService) {
      super();
      this.title = this.myService.getNews();
  
    }
    title = "";
  }
  it("should injectable service ", () => {
    const appcomponent = bootstrap(AppComponent);
    expect(appcomponent.title).toBe("news");

  });

  it("should app module render app component", () => {
    app = new AppModule();
    app.setRootComponent(AppComponent);
    app.declareComponents(AppComponent);
    app.declareServices(NewsService)

    const result = app.run();

    expect(result).toContain("<div><p>Welcome to my app!</p></div>");
    expect(result).toContain("news");
  });
});

