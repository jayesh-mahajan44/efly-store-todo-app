import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public gs:GlobalService,public router:Router) { }
list = []
user:any;
  ngOnInit(): void {
    this.getBlogs();
  this.user = this.gs.getLocalStorage('activeUser')

   
  }
getBlogs(){
  this.list = this.gs.getLocalStorage('blogs')

}

navigate(route,id?){
  let route1 = route+ (id == 0 || id?'/'+id:'')
  console.log(route1)
  console.log(route,id)
  

  this.router.navigate([route1])
  
}
}
