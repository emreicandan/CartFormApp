import { ProductImage } from "./product-image";

export interface Cart{
    id:number;
    userId:number;
    items:CartItem[]
}

export interface CartItem{
    cartId:number;
    productId:number;
    count:number;
    productName:string;
    productPrice:number;
    image:ProductImage;
}
