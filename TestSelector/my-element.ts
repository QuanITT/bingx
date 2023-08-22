import Controller from "../Base/controller";
import News from "../Models/News";

class MyCustomElement extends HTMLElement {
  private controller: Controller<News>;
  constructor() {
    super(); 
    this.controller = new Controller();
  }

  connectedCallback() {
    const news = {
      title: "Sample Title",
      imgUrl: "sample-image.jpg",
      like: 10,
      unlike: 5,
      channel: { name: "Sample Channel", icon: "abc" },
    };

    // Gọi phương thức getData từ controller để lấy toàn bộ dữ liệuF
    const data = this.controller.getData(news);

    // Hiển thị dữ liệu hoặc truyền dữ liệu qua thuộc tính
    this.innerHTML = `<div><h1>${data.title}</h1><img src="${data.imgUrl}" alt="Image"><p>Like: ${data.like}, Unlike: ${data.unlike}</p><p>Channel: ${data.channelName}</p></div>`;
  }
}

// Define the custom element using customElements.define
customElements.define("my-custom-element", MyCustomElement);
