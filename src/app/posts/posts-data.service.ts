import {Injectable} from '@angular/core'
import {DefaultDataService, HttpUrlGenerator} from '@ngrx/data'
import {Post} from '../models/post.model'
import {HttpClient} from '@angular/common/http'
import {map, Observable} from 'rxjs'
import {Update} from '@ngrx/entity'

@Injectable()
export class PostsDataService extends DefaultDataService<Post> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Post', http, httpUrlGenerator)
  }

  override getAll(): Observable<Post[]> {
    return this.http
      .get(`http://localhost:3001/posts`)
      .pipe(
        map((data:object | any) => {
          const posts: Post[] = []

          for (let key in data) {
              // posts.push({...data[key], id: key})
              posts.push({...data[key]})
          }
          return posts
        }),
      )
  }

  override add(post: Post): Observable<Post>{
    return this.http.post<{id: string}>(
      `http://localhost:3001/posts`,
      post
    ).pipe(map(data => {
      return {...post, id: data.id}
    })
    )
  }

  override update(post: Update<Post>): Observable<Post>{
    return this.http
      .put<Post>(`http://localhost:3001/posts/${post.id}`, {...post.changes}
      )
  }
  override delete(id: string): Observable<string>{
    return this.http.delete(
      `http://localhost:3001/posts/${id}`
    ).pipe(map(data => {
      return id
    }))
  }
}
