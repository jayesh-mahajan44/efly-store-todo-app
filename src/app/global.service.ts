import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GlobalService {
  users = [
    {
      username: "admin",
      password: "admin",
      isAdmin: true,
    },
    {
      username: "guest",
      password: "guest",
      isAdmin: false,
    },
  ];

  constructor() {}
user:any;
  setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  isLogin(){
    
   let user = this.getLocalStorage('activeUser')
   if(user && user.username && user.password){
     return true
   }
   else{

     return false;
   }
  }
}
