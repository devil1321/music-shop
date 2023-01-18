
export interface CartItem{
    id:number,
    price_id:string,
    title:string,
    image:string,
    price:number,
    quantity?:number,
    genres?:string[];
    tags?:string[];
    source?:string;
    base64?:string;
}
export interface Track{
    id:number,
    price_id:string,
    title:string,
    price:number,
    genres:string;
    tags:string;
    author:string;
    image:string,
    base64:string;
}