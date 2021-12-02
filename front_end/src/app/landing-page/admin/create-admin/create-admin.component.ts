import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {

  admin: Admin = new Admin();


  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  saveAdmin(){
    this.adminService.createAdmin(this.admin).subscribe(data=>{
      console.log(data);
      this.goToUserList();
    }, error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/landing-page/admin-list']);
  }

}
