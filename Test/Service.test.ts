import { BaseComponent } from "../Base/component";
import { ComponentMetadata } from "../Base/decorator";
import { AppModule } from "../Controller/appmodule";
import { NewsService } from "../Serivce/newService";

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
    //   const a = this.newsService.getNews();
    //   this.title = a;
    }
    title = "news";
  }

  it("should component be declared component and service", () => {
    app = new AppModule();
    app.declareComponents(NewsComponent);
    app.declareService(NewsService);

    expect(app.getDeclaration()["NEWS"]).toBeTruthy();

    expect(app.getProvider()["ROOT"]).toBeTruthy();
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
    provider: [NewsService]
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
    app.declareService(NewsService);
    
    const result = app.run();
    

    expect(result).toContain("<div><p>Welcome to my app!</p></div>");
    expect(result).toContain("news");
  });
});

// test cho parent component , children component đều được inject service

// test cho parent component có inject service , children component ko có inject service
// các injectable service có inject providerIn "root " được new()
// test data service
