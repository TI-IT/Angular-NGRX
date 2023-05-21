import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule, Routes} from '@angular/router'
import {ListPostComponent} from './list-post/list-post.component'
import {PostsResolver} from './posts.resolver'
import {AddPostComponent} from './add-post/add-post.component'
import {EditPostComponent} from './edit-post/edit-post.component'
import {SinglePostComponent} from './single-post/single-post.component'
import {EntityDataService, EntityDefinitionService, EntityMetadataMap} from '@ngrx/data'
import {PostsDataService} from './posts-data.service'
import {ReactiveFormsModule} from '@angular/forms'
import {Post} from '../models/post.model'

const routes: Routes = [
  {path: '', component: ListPostComponent, resolve: {posts: PostsResolver}},
  {path: 'add', component: AddPostComponent},
  {path: 'edit/:id', component: EditPostComponent, resolve: {posts: PostsResolver}},
  {path: 'details/:id', component: SinglePostComponent, resolve: {posts: PostsResolver}},
]

const entityMetadata: EntityMetadataMap = {


  Post: {
    sortComparer: sortByName,
    entityDispatcherOptions: {
      optimisticUpdate: true,
      // optimisticAdd: true,
    },
  },
}

function sortByName(a: Post, b: Post): number{
  let comp = a.title.localeCompare(b.title)
  if(comp > 0) return -1
  if(comp < 0) return 1
  return comp
}

@NgModule({
  declarations: [
    ListPostComponent,
    EditPostComponent,
    SinglePostComponent,
    AddPostComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  providers: [PostsResolver, PostsDataService],
})
export class PostsModule {
  constructor(
    eds: EntityDefinitionService,
    entityDataService: EntityDataService,
    PostDataService: PostsDataService,
  ) {
    eds.registerMetadataMap(entityMetadata)
    entityDataService.registerService('Post', PostDataService)
  }
}
