import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {
  id: number;
  admin: Admin = new Admin();


  constructor(private adminService: AdminService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.adminService.getAdminById(this.id).subscribe(
      data => {
        this.admin=data;
      }, error => console.log(error)
    );
  }

  saveAdmin(){
    this.adminService.updateAdmin(this.id, this.admin).subscribe(data =>{
        this.goToAdminList();
    }, error => console.log(error));
  }

  goToAdminList(){
    this.router.navigate(['/landing-page/admin-list'])
  }

}
