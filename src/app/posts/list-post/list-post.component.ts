import {Component, OnInit} from '@angular/core'
import {PostService} from '../post.service'
import {Observable} from 'rxjs'
import {Post} from '../../models/post.model'

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit{
  posts$!: Observable<Post[]>

  constructor(private PostService: PostService) {
  }
  ngOnInit(): void {
    this.posts$ = this.PostService.entities$
  }

  onDeletePost(event: Event, id: string | any){
    event.preventDefault();
    if(confirm('вы уверены что хотите удалить?')){
      this.PostService.delete(id)
    }
  }
}
