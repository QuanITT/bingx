import { Component } from "../Base/component";
import { PARAMTYPES_METADATA } from "../Base/constants";
import { Service } from "../Base/service";

export class ReflectHelper {
    constructor(){}

    getMetadata(component: Component) {
        return Reflect.getMetadata(PARAMTYPES_METADATA, component) 
    }

    getMetadataSerivce(component: Service) {
        return Reflect.getMetadata(PARAMTYPES_METADATA, component) 
    }
    
}