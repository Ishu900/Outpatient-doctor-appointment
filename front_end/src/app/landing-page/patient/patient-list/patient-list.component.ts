import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients: Patient[];
  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {
    this.getPatients();
  }

  private getPatients(){
    // debugger
    this.patientService.getPatientList().subscribe(data => {
      this.patients = data;
      for(let i=0; i<this.patients.length; i++){
        this.patients[i]['type']="password";
        this.patients[i]['bname']="Show";
      }
    });
  }

  updatePatient(id: number){
    console.log(id);
    this.router.navigate(['/landing-page/update-patient', id]);
  }

  deletePatient(id: number){
    // console.log(id);
    // this.router.navigate(['/landing-page/delete-user', id]);
    this.patientService.deletePatient(id).subscribe(
      data => {
        console.log(data);
        this.getPatients();
      }, error => {
        console.log("Not Delete")
      }
    )
  }


  showpassword(type:any,index:any){
    // this.admins[index].type='text'

    if(type=='text'){
      this.patients[index].type='password'
      this.patients[index].bname='Show'
    } else{
      this.patients[index].type='text'
      this.patients[index].bname='Hide'
    }

  }

}
