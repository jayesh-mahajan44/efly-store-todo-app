import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [BlogComponent, AddComponent, ViewComponent, ListComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BlogModule { }
