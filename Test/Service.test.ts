import { ComponentMetadata } from "../Base/decorator";
import { AppModule } from "../Controller/appmodule";
import { NewsService } from "../Serivce/newService";

describe("Test declarations Component and service", () => {
  @ComponentMetadata({
    selector: "news",
    template: "<div>news 1</div>",
    style: "h1{color:red}",
    provider: [NewsService],
  })
  class NewsComponent {
    constructor(public newsService: NewsService) {
        const a = newsService.getNews();

        expect(a).toBe("news");
    }
  }
 
  it("should component be declared component and service", () => {
    const appModule = new AppModule();
    appModule.declareComponents(NewsComponent);
    appModule.declareService(NewsService);

    expect(appModule.getDeclaration()["NEWS"]).toBeTruthy();

    //providerIn service test

    expect(appModule.getDeclaration()["ROOT"]).toBeTruthy();

  });
});
