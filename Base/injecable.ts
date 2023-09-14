import "reflect-metadata";
import { PARAMTYPES_METADATA } from "./constants";
import { Service } from "./service";

export class Injector extends Map {
  public resolve(target: Service): InstanceType<Service> {
    const tokens =
      Reflect.getMetadata(PARAMTYPES_METADATA, target).provider || [];
    const injections = tokens.map((token: Service) => this.resolve(token));

    const classInstance = this.get(target);
    if (classInstance) {
      return classInstance;
    }

    const newClassInstance = new target(...injections);
    this.set(target, newClassInstance);

    return newClassInstance;
  }
}
export const bootstrap = (target: Service): InstanceType<Service> => {
  const injector = new Injector();
  const entryClass = injector.resolve(target);
  return entryClass;
};
