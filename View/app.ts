import { ComponentMetadata } from "../Base/decorator";

@ComponentMetadata({
  selector: "app-root",
  template: `
    <div>
        Welcome to my app!
        <news></news>
        <news></news>
    </div>
  `,
    style: "h1{color:red}",
})
export class AppComponent {}