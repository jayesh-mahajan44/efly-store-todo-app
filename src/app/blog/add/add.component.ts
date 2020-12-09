import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { GlobalService } from "src/app/global.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"],
})
export class AddComponent implements OnInit {
  constructor(public gs: GlobalService, public router: Router) {}
  form: FormGroup;
  url:any;
  ngOnInit(): void {
    this.initializeForm();
    if(this.router.url.includes('edit')){
     this.patchValue()
    }
  }
  initializeForm() {
    this.form = new FormGroup({
      title: new FormControl(""),

      description: new FormControl(""),
    });
  }
  navigate(){
    this.router.navigate(["blog/list"]);

  }

  patchValue(){
    let blogs = this.gs.getLocalStorage("blogs");
     this.url= (this.router.url.split('/'))
  
    this.form.patchValue(blogs[this.url[3]])
  }
  add() {
    if (!this.form.value.title && !this.form.value.description) {
      return;
    }
    let user = this.gs.getLocalStorage("activeUser");
    let blog: any = this.form.value;
    blog.owner = user.username;
    blog.date = new Date();
    let blogs = this.gs.getLocalStorage("blogs");
    if (blogs && blogs.length) {
      blogs.push(blog);
    } else {
      blogs = [];
      blogs.push(blog);
    }
    this.gs.setLocalStorage("blogs", blogs);
    this.router.navigate(["blog/list"]);
  }

  update(){
    let blogs = this.gs.getLocalStorage("blogs");

    let user = this.gs.getLocalStorage("activeUser");
    let blog: any = this.form.value;
    blog.owner = user.username;
    blog.date = new Date();

    blogs[this.url[3]]=blog

    this.gs.setLocalStorage("blogs", blogs);
    this.router.navigate(["blog/list"]);
  }
}
