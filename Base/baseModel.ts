import { Channel } from "../Models/Channel";

export interface BaseModel {
    title: string;
    imgUrl?: string;
    like: number;
    unlike: number;
    channel: Channel;
}
