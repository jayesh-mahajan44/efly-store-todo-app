import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(public gs:GlobalService,public router:Router) {}
  form: FormGroup;

  ngOnInit(): void {
    this.initiliazeForm();
    if(this.gs.isLogin()){
this.router.navigate(['blog/list'])
    }
  }

  initiliazeForm() {
    this.form = new FormGroup({
      username: new FormControl(""),
      password: new FormControl(""),
    });
  }

  signIn(){
    if(!this.form.value.username && !this.form.value.password){
      return
    }
    for(let i =0;i<this.gs.users.length;i++){
      if(this.form.value.username==this.gs.users[i].username && this.form.value.password==this.gs.users[i].password){
        this.gs.setLocalStorage('activeUser',this.gs.users[i]);

        this.gs.user=this.gs.users[i]
        this.router.navigate(['blog/list'])
      }
    }
  }
}
