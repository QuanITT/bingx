export class CustomComponent {
  static decorator(options: {
    selector: string;
    view: string;
    controller: string;
    model: string;
  }) {
    return function () {
      const { selector, view, controller, model } = options;
      class ComponentClass {
        private model: any;
        constructor() {
          const e = document.querySelector(selector);

          if (e) {
            this.loadView(view, e);
            this.loadController(controller);
            this.loadModel(model);
          }
        }
        private async loadModel(model: string) {
          try {
            const response = await fetch(model);
            const modelData = await response.json();
            this.model = modelData;
          } catch (error) {
            console.error("Error loading model:", error);
          }
        }
        private async loadController(controller: string) {
          try {
            // Gửi yêu cầu HTTP để tải controller từ file local
            const response = await fetch(controller);
            const controllerScript = await response.text();

            eval(controllerScript);
          } catch (error) {
            console.error("Error loading controller:", error);
          }
        }
        private async loadView(view: string, e: Element) {
          try {
            // Gửi yêu cầu HTTP để lấy nội dung từ file local
            const response = await fetch(view);
            const html = await response.text();

            // Đặt nội dung HTML vào phần tử DOM
            e.innerHTML = html;
          } catch (error) {
            console.error("Error loading view:", error);
          }
        }
      }
      return ComponentClass;
    };
  }
}
export default CustomComponent;
