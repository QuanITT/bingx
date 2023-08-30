import { ComponentDecorator } from "../Base/decorator";
@ComponentDecorator({
  selector: "channel",
  template: "<div>{{channel}}</div>",
  style: "h1{color:red}",
})
export class ChannelComponent {
  channel = "ABC";
  constructor() {}
}
