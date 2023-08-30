export function ComponentDecorator(config: { selector: string; template: string; style: string; }) {
    return function (target: Function) {
        target.prototype.selector = config.selector;
        target.prototype.template = config.template;    
        target.prototype.style = config.style;
    };

  }