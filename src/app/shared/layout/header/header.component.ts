import {Component, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {HeaderService} from './header.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  searchFieldChanged(value: string) {
    this.headerService.searchProducts(value)
  }
}
