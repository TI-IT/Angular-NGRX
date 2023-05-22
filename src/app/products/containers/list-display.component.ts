import {Component, OnInit} from '@angular/core'
import {ProductService} from '../products.service'
import {Observable} from 'rxjs'
import {Product} from '../model/product'
import {Store} from '@ngrx/store'
import {HeaderService} from '../../shared/layout/header/header.service'

@Component({
  selector: 'app-list-display',
  template: `
    <h1>Products</h1>
    <app-list-products
      [searchValue]="searchValue$ | async"
      [products]="products$ | async"
    ></app-list-products>
  `,
  styles: [],
})
export class ListDisplayComponent implements OnInit {
  searchValue$!: Observable<string>
  products$!: Observable<Product[]>
  private loading$!: Observable<boolean> | Store<boolean>
  queryFilter$!: Observable<string>

  constructor(
    private productService: ProductService,
    private headerService: HeaderService
  ) {
    //Предостовляет все объекты entities-сущности
    this.products$ = productService.entities$
    //Предостовляет все параметры загрузки
    this.loading$ = productService.loaded$
    this.queryFilter$ = headerService.search
  }

  ngOnInit(): void {
    console.log(this.queryFilter$.subscribe())
    this.productService.getWithQuery('xx')
  }
}
