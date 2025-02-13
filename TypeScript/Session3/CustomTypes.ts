export interface item {
    name:string
    price:number
    brand:string
}


export interface student {
    name:string;
    rollNumber:number;
    marks?:number;
}


export interface orderedItem extends item{
    OrderId:number | string | boolean
    DateOfDeliver:string
}