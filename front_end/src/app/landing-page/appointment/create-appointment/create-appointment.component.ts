
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/model/appointment';

import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  appointment: Appointment = new Appointment();

  constructor(private appointmentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {
  }


  saveAppointment(){
    this.appointmentService.createAppointment(this.appointment).subscribe(data=>{
      console.log(data);
      this.goToUserList();
    }, error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/landing-page/appointment-list']);
  }

}
