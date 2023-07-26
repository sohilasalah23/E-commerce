export interface Cart {
    numOfCartItems:number, 
    data:Data


}

interface Data {
    totalCartPrice:number, 
    products:products[]
}

interface products{
    count:number,
    price:number,
    product:Product
}


interface Product{
    id:string,
    title:String,
    imageCover:string 
}