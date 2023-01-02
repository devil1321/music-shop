import { Current } from "../interfaces";
import { PlayerTypes } from "../types";

export interface SET_IS_PLAY{
    type:PlayerTypes.SET_IS_PLAY
    isPlay:boolean;
}

export interface SET_SRC{
    type:PlayerTypes.SET_SRC
    src:string;
}
export interface SET_CURRENT{
    type:PlayerTypes.SET_CURRENT
    current:Current;
}


export type Action = SET_IS_PLAY | SET_SRC | SET_CURRENT 