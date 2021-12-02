import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/model/appointment';

import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent implements OnInit {

  id: number;
  appointment: Appointment = new Appointment();
  constructor(private appointmentService: AppointmentService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.appointmentService.getAppointmentById(this.id).subscribe(
      data => {
        this.appointment=data;
      }, error => console.log(error)
    );
  }

  saveAppointment(){
    this.appointmentService.updateAppointment(this.id, this.appointment).subscribe(data =>{
        this.goToAppointmentList();
    }, error => console.log(error));
  }

  goToAppointmentList(){
    this.router.navigate(['/landing-page/appointment-list'])
  }

}
