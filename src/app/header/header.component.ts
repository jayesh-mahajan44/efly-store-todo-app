import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router:Router,public gs:GlobalService) { }
user:any;
  ngOnInit(): void {
    this.getuser()
  }
logOut(){
  localStorage.removeItem('activeUser');
  this.gs.user=''
  this.router.navigate(['login'])
}
navigate(value){
  this.router.navigate([value])
}

getuser(){
  this.gs.user = this.gs.getLocalStorage('activeUser')
  console.log(this.gs.user)
}
}
