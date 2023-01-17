import { Dispatch } from "redux"
import { UITypes } from "../types"

export const handleSidebar = (isOpen:boolean) => (dispatch:Dispatch<any>) => {
    const sidebar = document.querySelector('.cart-sidebar') as HTMLDivElement
    if(isOpen){
        sidebar.style.transform = 'translateX(100%)'
        sidebar.style.transition = 'all 1s ease-in-out'
        dispatch({
            type:UITypes.HANDLE_SIDEBAR,
            isOpen:true
        })
    }else{
        sidebar.style.transform = 'translateX(0%)'
        sidebar.style.transition = 'all 1s ease-in-out'
        dispatch({
            type:UITypes.HANDLE_SIDEBAR,
            isOpen:false
        })
    }
}