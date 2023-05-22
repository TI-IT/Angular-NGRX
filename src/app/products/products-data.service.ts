import {Injectable} from '@angular/core'
import {DefaultDataService, HttpUrlGenerator} from '@ngrx/data'
import {HttpClient} from '@angular/common/http'
import {map, Observable} from 'rxjs'
import {Product} from './model/product'

@Injectable()
export class ProductsDataServiceConfig extends DefaultDataService<Product> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Products', http, httpUrlGenerator)
  }

  override getAll(): Observable<Product[]> {
    return this.http
      .get(`http://localhost:3001/products`)
      .pipe(
        map((data:object | any) => {
          const products: Product[] = []
          for (let key in data) {
            products.push({...data[key]})
          }
          return products
        }),
      )
  }
  override getWithQuery(q: string): Observable<Product[]> {
    return this.http
      .get(`http://localhost:3001/products?q=${q}`)
      .pipe(
        map((data:object | any) => {
          const products: Product[] = []
          for (let key in data) {
            products.push({...data[key]})
          }
          return products
        }),
      )
  }

}
