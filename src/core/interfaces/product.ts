export interface Product {
    imageCover:string,
    price:number,
    title:string,
    category:category,
    ratingsAverage:number,
    id:string,
    description?:string,
    images?:string

}
interface category{
    name:string
}