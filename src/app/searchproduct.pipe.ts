import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'searchproduct'
})
export class SearchproductPipe implements PipeTransform {

  transform(products: Product[],term:string):  Product[] {
    return products.filter((product)=>(product.title.toLowerCase().includes(term.toLocaleLowerCase())))
  }

}
