var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyCustomElement = /** @class */ (function (_super) {
    __extends(MyCustomElement, _super);
    function MyCustomElement() {
        return _super.call(this) || this;
    }
    // Called when the element is first connected to the DOM
    MyCustomElement.prototype.connectedCallback = function () {
        this.innerHTML = '<p>This is my custom element!</p>';
    };
    return MyCustomElement;
}(HTMLElement));
// Define the custom element using customElements.define
customElements.define('my-custom-element', MyCustomElement);
