import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  admins: Admin[];
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getAdmins();
  }

  getAdmins(){
    this.adminService.getAdminList().subscribe(data => {
      this.admins = data;

      for(let i=0; i<this.admins.length; i++){
        this.admins[i]['type']="password";
        this.admins[i]['bname']="Show";
      }
      console.log(this.admins);
    });
  }

  updateAdmin(id: number){
    console.log(id);
    this.router.navigate(['/landing-page/update-admin', id]);
  }

  deleteAdmin(id: number){
    // console.log(id);
    // this.router.navigate(['/landing-page/delete-user', id]);
    this.adminService.deleteAdmin(id).subscribe(
      data => {
        console.log(data);
        this.getAdmins();
      }, error => {
        console.log("Not Delete")
      }
    )
  }



  showpassword(type:any,index:any){
    // this.admins[index].type='text'

    if(type=='text'){
      this.admins[index].type='password'
      this.admins[index].bname='Show'
    } else{
      this.admins[index].type='text'
      this.admins[index].bname='Hide'
    }

  }

}
