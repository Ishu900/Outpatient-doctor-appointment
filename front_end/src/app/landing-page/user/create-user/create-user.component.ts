import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User();


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.userService.createUser(this.user).subscribe(data=>{
      console.log(data);
      this.goToUserList();
    },
    error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/landing-page/user-list'])
  }

  onSubmit(){
    console.log(this.user);
    this.saveUser;

  }
}
