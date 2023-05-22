import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {ListProductsComponent} from './components/list-products/list-products.component'
import {ListDisplayComponent} from './containers/list-display.component'
import {AddProductsComponent} from './components/add-products/add-products.component'
import {EditProductsComponent} from './components/edit-products/edit-products.component'
import {SingleProductsComponent} from './components/single-products/single-products.component'
import {ProductsDataServiceConfig} from './products-data.service'
import {EntityDataService, EntityDefinitionService, EntityMetadataMap} from '@ngrx/data'
import {Post} from '../models/post.model'
import {AsyncPipe, CommonModule} from '@angular/common'


const routes: Routes = [
  {path: '', component: ListDisplayComponent},
]

const entityMetadata: EntityMetadataMap = {
  Product: {
    // sortComparer: sortByName,
    entityDispatcherOptions: {
      optimisticUpdate: true,
      // optimisticAdd: true,
    },
  },
}

function sortByName(a: Post, b: Post): number {
  let comp = a.title.localeCompare(b.title)
  if (comp > 0) return -1
  if (comp < 0) return 1
  return comp
}

@NgModule({
  declarations: [
    ListDisplayComponent,
    AddProductsComponent,
    EditProductsComponent,
    ListProductsComponent,
    SingleProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AsyncPipe,
  ],
  providers: [ProductsDataServiceConfig],
})
export class ProductsModule {
  constructor(
    eds: EntityDefinitionService,
    entityDataService: EntityDataService,
    ProductsDataServiceConfig: ProductsDataServiceConfig,
  ) {
    eds.registerMetadataMap(entityMetadata)
    entityDataService.registerService('Product', ProductsDataServiceConfig)
  }
}
