import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data'
import {Injectable} from '@angular/core'
import {Product} from './model/product'


@Injectable({ providedIn: 'root' })
export class ProductService extends EntityCollectionServiceBase<Product> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Product', serviceElementsFactory);
  }
}
