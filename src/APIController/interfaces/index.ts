
export interface CartItem{
    id:number,
    price_id:string,
    title:string,
    image:string,
    price:number,
    quantity:number,
    genres?:string[];
    tags?:string[];
    source?:string;
}