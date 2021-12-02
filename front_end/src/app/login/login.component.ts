import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../interface/user.interface';
import { User } from '../model/user';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  msg="";

  constructor(private userService: UserService, private _router : Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.userService.loginUserFromRemote(this.user).subscribe(
      (data: IUser) => {
        console.log("response received");
        console.log(data);
        localStorage.setItem('userid', String(data.userId));
        localStorage.setItem('username', data.userName);
        localStorage.setItem('password', data.password);
        localStorage.setItem('role', data.role);

        this._router.navigate(['/landing-page/user-list'])
      },
      error => {
        console.log("exception occured");
        this.msg = "Bad Credential, Please enter valid user name and password";
      }
    );
  }

  gotoregistration(){
    this._router.navigate(['/registration'])
  }

}
