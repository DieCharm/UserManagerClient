import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user";
import {UsersService} from "../../../services/users.service";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  userList: User[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.userService.allUsers()
      .subscribe({
        next: users =>
          this.userList = users
      });
  }

}
