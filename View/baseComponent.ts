export class BaseComponent {
    private selector: string;
    private template: string;
    private style: string;
    private data: any;
    private children: BaseComponent[];

    constructor(selector: string, template: string, style: string, data: any, children: BaseComponent[]) {
        this.selector = selector;
        this.template = template;
        this.style = style;
        this.data = data;
        this.children = children;
    }
    

    



    
}