import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { TodoComponent } from './todo/todo.component';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";


const routes: Routes = [
  {path: '', component: TodoComponent},
  {path: 'category', component: CategoryComponent},
]


@NgModule({
  declarations: [
    CategoryComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class TodoModule { }
