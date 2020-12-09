import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public gs:GlobalService,public router:Router){

  }
  canActivate(
  
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
   let user = this.gs.getLocalStorage('activeUser')
   if(user && user.username && user.password){
     return true
   }
   else{
this.router.navigate(['login'])
     return false;
   }
  }
  
}
