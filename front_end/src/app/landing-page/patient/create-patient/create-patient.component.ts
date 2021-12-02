import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  patient: Patient = new Patient();

  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.patientService.createPatient(this.patient).subscribe(data=>{
      console.log(data);
      this.goToUserList();
    }, error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/landing-page/patient-list']);
  }

}
