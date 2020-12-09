import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from './auth.guard';
import { ListComponent } from './blog/list/list.component';

const routes: Routes = [
  {
    path: "blog",
    loadChildren: () => import("./blog/blog.module").then((m) => m.BlogModule),
    canActivate: [AuthGuard]  
  },
  { path: "login", component: LoginComponent, },
  {path:'list',component:ListComponent},
  { path: "",redirectTo:'login',pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
