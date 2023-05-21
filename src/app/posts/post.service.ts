import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data'
import {Post} from '../models/post.model'
import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class PostService extends EntityCollectionServiceBase<Post>{

  constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
    super('Post', serviceElementFactory)
  }
}
