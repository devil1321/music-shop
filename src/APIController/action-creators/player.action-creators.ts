import { Dispatch } from "redux";
import { PlayerTypes } from "../types";
import { MutableRefObject } from "react";
import { Current } from "../interfaces";


export const handleIsPlay = (isPlay:boolean) => (dispatch:Dispatch<any>) =>{
    dispatch({
        type:PlayerTypes.SET_IS_PLAY,
        isPlay:isPlay,
    })
}

export const handleSrc = (src:string) => (dispatch:Dispatch<any>) =>{
    dispatch({
        type:PlayerTypes.SET_SRC,
        src:src,
    })
}
export const handleCurrent = (current:Current) => (dispatch:Dispatch<any>) =>{
    dispatch({
        type:PlayerTypes.SET_CURRENT,
        current:current,
    })
}







