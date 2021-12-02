import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/model/doctor';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctors: Doctor[];

  constructor(private doctorService: DoctorService, private router:Router) { }

  ngOnInit(): void {
    this.getDoctors();
  }
  private getDoctors(){
    // debugger
    this.doctorService.getDoctorList().subscribe(data => {
      this.doctors = data;
      for(let i=0; i<this.doctors.length; i++){
        this.doctors[i]['type']="password";
        this.doctors[i]['bname']="Show";
      }});
  }

  updateDoctor(id: number){
    console.log(id);
    this.router.navigate(['/landing-page/update-doctor', id]);
  }

  deleteDoctor(id: number){
    // console.log(id);
    // this.router.navigate(['/landing-page/delete-user', id]);
    this.doctorService.deleteDoctor(id).subscribe(
      data => {
        console.log(data);
        this.getDoctors();
      }, error => {
        console.log("Not Delete")
      }
    )
  }


  showpassword(type:any,index:any){
    // this.admins[index].type='text'

    if(type=='text'){
      this.doctors[index].type='password'
      this.doctors[index].bname='Show'
    } else{
      this.doctors[index].type='text'
      this.doctors[index].bname='Hide'
    }

  }

}
