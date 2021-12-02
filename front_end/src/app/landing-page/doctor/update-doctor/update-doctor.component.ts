import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/model/doctor';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent implements OnInit {
  id: number;
  doctor: Doctor=new Doctor();
  constructor(private doctorServive: DoctorService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.doctorServive.getDoctorById(this.id).subscribe(
      data => {
        this.doctor=data;
      }, error => console.log(error)
    );
  }

  saveUser(){
    this.doctorServive.updateDoctor(this.id, this.doctor).subscribe(data =>{
        this.goToUserList();
    }, error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/landing-page/doctor-list'])
  }

}
