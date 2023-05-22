import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, take} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HeaderService {


  constructor() { }

  search: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  )

  search$: Observable<string> = this.search.asObservable()

  searchProducts(query: string){
    this.search$.pipe(take(1)).subscribe(val => {
      const newSearch =  query
      this.search.next(newSearch)
    })
  }
}
