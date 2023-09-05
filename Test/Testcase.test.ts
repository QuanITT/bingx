import "reflect-metadata";
import News from "../Models/News";
import { NewsService } from "../Serivce/newService";
import { ComponentMetadata } from "../Base/decorator";
import { BaseComponent } from "../View/baseComponent";
/* eslint-disable  @typescript-eslint/no-explicit-any */
//create test root element
describe("@component", () => {
  it("Should Render Data for template < Builder > and Data for News  ", () => {
    const component = new BaseComponent();
    const build = component
      .buildSelector("news-view")
      .buildStyle("app-root")
      .buildModel(News)
      .buildTemplate(`<p>hehehee</p><div></div>`)
      .appBuild();

    expect(build).toBe("<p>hehehee</p><div></div>");
  });
});

/// DI test
describe("Test Inject decorator", () => {
  it("should @injecable providerIn", () => {
    const metaData = Reflect.getMetadata("componentMetadata", NewsService);

    expect(metaData).toEqual({ providedIn: "root" });
  });
});
// test provider in component

describe("Test Decorator", () => {
  it("should decorator ProviderIn @component", () => {
    @ComponentMetadata({
      selector: "news",
      template: "<div>{{title}}</div>",
      style: "h1{color:red}",
      provider: [NewsService],
    })
    class AbcComponent {
      constructor(public newsService: NewsService) {}
    }

    const metaData = Reflect.getMetadata("componentMetadata", AbcComponent);
    expect(metaData.selector).toBe("news");

    expect(metaData.provider).toEqual([NewsService]);

    expect(metaData.style).toBe("h1{color:red}");
  });
});
