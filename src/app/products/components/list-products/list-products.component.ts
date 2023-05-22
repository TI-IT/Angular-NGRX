import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit{

  @Input() searchValue!: any;
  @Input() products!: any;

  ngOnInit(): void {
  }

  searchFieldChanged(value: string) {

  }

  addToReadingList(product: string){

  }

  removeFromReadingList(product: string){

  }

}
