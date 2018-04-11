import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private aS: AuthService) { }

  ngOnInit() {
  }
  register(tableData: NgForm) {
    this.aS.signup(tableData.value.email, tableData.value.password);
  }
}
