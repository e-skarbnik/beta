import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: Observable<User[]>;

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }

  ngOnInit() {

  }



}
