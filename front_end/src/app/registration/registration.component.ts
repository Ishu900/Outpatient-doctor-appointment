import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { NgForm } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  msg='';

  constructor(private _service : UserService , private _router : Router) { }

  ngOnInit(): void {
  }


  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data => {
        console.log("Response Received");
        this._router.navigate(['/login']);
        // this.msg="Registration Successful";
      }
      ,
      error => {
        console.log("exception occured");
        this.msg=error.error;
      }
    )
  }

}
