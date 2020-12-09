import { Component, OnInit } from "@angular/core";
import { GlobalService } from "src/app/global.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"],
})
export class ViewComponent implements OnInit {
  constructor(public gs: GlobalService, public router: Router) {}

  ngOnInit(): void {
    this.patchValue();
  }
  item: any;
  url: any;
  patchValue() {
    let blogs = this.gs.getLocalStorage("blogs");
    this.url = this.router.url.split("/");

    this.item = blogs[this.url[3]];
  }
  comment: any;
  addComment() {

console.log(this.comment)
if(!this.comment){
  return
}
    let blogs = this.gs.getLocalStorage("blogs");
    this.url = this.router.url.split("/");
    this.item = blogs[this.url[3]];

    let user = this.gs.getLocalStorage("activeUser");
   let req = {'comment':this.comment, 'commenter':user.username}

    if (this.item.comment && this.item.comment.length) {
    this.item.comment.push(req)
    }else{
      this.item.comment=[]
      this.item.comment.push(req)
    }
    blogs[this.url[3]]=this.item;
    this.gs.setLocalStorage("blogs", blogs);
    this.comment = "";
  }

  navigate(route, id?) {
    let route1 = route + (id ? "/" + id : "");
    console.log(route1, route, id);

    this.router.navigate([route1]);
  }
  like() {}
}
