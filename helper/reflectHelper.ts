import { Component } from "../Base/component";
import { PARAMTYPES_METADATA } from "../Base/constants";

export class ReflectHelper {
    constructor(){}

    getMetadata(component: Component) {
        return Reflect.getMetadata(PARAMTYPES_METADATA, component) 
    }
}