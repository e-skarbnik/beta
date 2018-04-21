import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../models/user.model';


@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const us: User = {
      name: form.value.name,
      surname: form.value.surname,
      email: form.value.email,
      $key: ''
    };
    this.userService.addUser(us);
  }

}
