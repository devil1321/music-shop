export enum UITypes{
    HANDLE_SIDEBAR = 'HANDLE_SIDEBAR',
}

export enum PlayerTypes{
    SET_IS_PLAY = 'SET_IS_PLAY',
    SET_SRC = 'SET_SRC',
    SET_CURRENT = 'SET_CURRENT',
}

export enum ServerTypes{
    FETCH_TRACK = 'FETCH_TRACK',
    FETCH_TRACK_LIST = 'FETCH_TRACK_LIST',
    SIGN_UP = 'SIGN_UP',
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
    INIT_USER = 'INIT_USER',
    INIT_PERSON = 'INIT_PERSON',
    HANDLE_UPDATE_OR_ADD_TRACK = 'HANDLE_UPDATE_OR_ADD_TRACK',
    HANDLE_REMOVE_TRACK = 'HANDLE_REMOVE_TRACK',
    HANDLE_CHECKOUT_SESSION = 'HANDLE_CHECKOUT_SESSION',
    HANDLE_MESSAGE = 'HANDLE_MESSAGE',
    FILTER_TRACK = 'FILTER_TRACK',
}

export enum CartTypes{
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    CLEAR_CART = 'CLEAR_CART',
    UPDATE_QUANTITY = 'UPDATE_QUANTITY',
}
