import { Channel } from "../Models/Channel";

export class BaseModel {
    title: string;
    imgUrl?: string;
    like?: number;
    unlike?: number;
    channel?: Channel;

    constructor(title:string ) {
        this.title = title;
    }
}

