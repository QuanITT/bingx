import { ComponentDecorator } from "../Base/decorator";

@ComponentDecorator({
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