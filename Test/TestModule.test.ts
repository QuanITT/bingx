import { BaseComponent } from "../Base/component";
import { ComponentMetadata } from "../Base/decorator";
import { AppModule } from "../Controller/appmodule";

describe("Test declarations", () => {
  @ComponentMetadata({
    selector: "news",
    template: "<div>news 1</div>",
    style: "h1{color:red}",
  })
  class NewsComponent {}
  it("should component be declared", () => {
    const appModule = new AppModule();
    appModule.declareComponents(NewsComponent);

    expect(appModule.getDeclaration()["NEWS"]).toBeTruthy();
  });
});

describe("Test render app component", () => {
  let app: AppModule;

  @ComponentMetadata({
    selector: "app-root",
    template: `
      <div><p>Welcome to my app!</p></div>
      <div>hello</div>
    `,
    style: "h1{color:red}",
  })
  class AppComponent extends BaseComponent {}

  it("should app module render app component", () => {
    app = new AppModule();
    app.setRootComponent(AppComponent);
    app.declareComponents(AppComponent);

    const result = app.run();

    expect(result).toContain("<div><p>Welcome to my app!</p></div>");
    expect(result).toContain("<div>hello</div>");
  });
});

describe("Test render multiple components", () => {
  let app: AppModule;

  @ComponentMetadata({
    selector: "app-root",
    template: `
      <div>
          Welcome to my app!
          <news></news>
          <news></news>
      </div>
      <div>Hello from another div</div>
    `,
    style: "h1{color:red}",
  })
  class AppComponent extends BaseComponent {}
  @ComponentMetadata({
    selector: "news",
    template: `
      <div>
        <p>title: {{title}}</p>
        <channel></channel>
      </div>
    `,
    style: "h1{color:red}",
  })
  class NewsComponent extends BaseComponent {
    title = "News 1";
  }

  @ComponentMetadata({
    selector: "channel",
    template: "<span>{{name}}</span>",
    style: "h1{color:red}",
  })
  class ChannelComponent extends BaseComponent {
    name = "VTC";
  }

  beforeAll(() => {
    app = new AppModule();
    app.setRootComponent(AppComponent);
    app.declareComponents(AppComponent, NewsComponent, ChannelComponent);
  });

  it("should app module render multiple components", () => {
    const result = app.run();

    expect(result).toContain(`<p>title: News 1</p>`);
    expect(result).toContain(`<span>VTC</span>`);
  });
});

describe("Test pass data", () => {
  let app: AppModule;
  @ComponentMetadata({
    selector: "parent-component",
    template: `
      <div>
        <child-component data="currentMessage"></child-component>
      </div>
    `,
    style: "h1{color:red}",
  })
  class ParentComponent extends BaseComponent {
    currentMessage = "Hello";
  }

  @ComponentMetadata({
    selector: "child-component",
    template: "<p>{{data}}</p>",
    style: "h1{color:red}",
  })
  class ChildComponent extends BaseComponent {
    data!: string;
  }

  beforeAll(() => {
    app = new AppModule();
    app.setRootComponent(ParentComponent);
    app.declareComponents(ParentComponent, ChildComponent);
  });

  it("should pass data from parent to child component", () => {
    const result = app.run();

    expect(result).toContain(`<p>Hello</p>`);
    // expect(result).toBe("");
  });
});

describe("Test pass object data", () => {
  let app: AppModule;
  @ComponentMetadata({
    selector: "parent-component",
    template: `
      <div>
        <child-component data="item"></child-component>
      </div>
    `,
    style: "h1{color:red}",
  })
  class ParentComponent extends BaseComponent {
    item = { title: "Hello", like: 20 };
  }

  @ComponentMetadata({
    selector: "child-component",
    template: `
      <div>
        <p>Title: {{data.title}}</p>
        <p>Like: {{data.like}}</p>
      </div>
    `,
    style: "h1{color:red}",
  })
  class ChildComponent extends BaseComponent {
    data!: string;
  }

  beforeAll(() => {
    app = new AppModule();
    app.setRootComponent(ParentComponent);
    app.declareComponents(ParentComponent, ChildComponent);
  });

  it("should pass data from parent to child component", () => {
    const result = app.run();

    expect(result).toContain(`<p>Title: Hello</p>`);
    expect(result).toContain(`<p>Like: 20</p>`);
    // expect(result).toBe("");
  });
});
