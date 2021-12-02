import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interface/user.interface';
import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];



  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

    this.checkLogin();

    this.getUsers();
  }

  private getUsers(){
    // debugger
    this.userService.getUserList().subscribe(data => {
      this.users = data;

      for(let i=0; i<this.users.length; i++){
        this.users[i]['type']="password";
        this.users[i]['bname']="Show";
      }

    });
  }
  updateUser(id: number){
    console.log(id);
    this.router.navigate(['/landing-page/update-user', id]);
  }

  deleteUser(id: number){
    // console.log(id);
    // this.router.navigate(['/landing-page/delete-user', id]);
    this.userService.deleteUser(id).subscribe(
      data => {
        console.log(data);
        this.getUsers();
      }, error => {
        console.log("Not Delete")
      }
    )
  }

  checkLogin(){

  //Local storage Start
   const userid =  localStorage.getItem('userid');
   const username =  localStorage.getItem('username');
   const password =  localStorage.getItem('password');
   const role =  localStorage.getItem('role');
   console.log(username);


   let user = new User();
    user.userId=Number(userid);
    user.userName=String(username);
    user.password=String(password);
    user.role=String(role);
    this.userService.loginUserFromRemote(user).subscribe(
      (data: IUser) => {
        return true;
      },

        error => {
          this.router.navigate(['/login']);

      }
    );
}


showpassword(type:any,index:any){
  // this.admins[index].type='text'

  if(type=='text'){
    this.users[index].type='password'
    this.users[index].bname='Show'
  } else{
    this.users[index].type='text'
    this.users[index].bname='Hide'
  }

}

}
