import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { BlogComponent } from './blog.component';


const routes: Routes = [
{
  path:'',
  component:BlogComponent,
  children:[  {
    path:'add',
    component:AddComponent
  },
  {
    path:'edit/:id',
    component:AddComponent
  },
  {
    path:'view/:id',
    component:ViewComponent
  },
  {
    path:'list',
    component:ListComponent
  }]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
