import { UserService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  page=1;
  users:User[];
  curPage:number;
  pageSize:number;
  constructor(private userService:UserService) { 
    this.curPage = 1;
    this.pageSize = 3;
    
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      data => {
        this.users=data;
      }
    );
    
  };
  numberOfPages(){
    console.log("****************************"+ Math.ceil(this.users.length / this.pageSize));
    return Math.ceil(this.users.length / this.pageSize);
  };
}
