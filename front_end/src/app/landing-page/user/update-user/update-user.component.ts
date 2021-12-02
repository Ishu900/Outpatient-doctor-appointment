import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id: number;
  user: User=new User();


  constructor(private userServive: UserService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userServive.getUserById(this.id).subscribe(
      data => {
        this.user=data;
      }, error => console.log(error)
    );
  }




  saveUser(){
    this.userServive.updateUser(this.id, this.user).subscribe(data =>{
        this.goToUserList();
    }, error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/landing-page/user-list'])
  }

}
