import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';

import { CreateUserComponent } from './user/create-user/create-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { CreateDoctorComponent } from './doctor/create-doctor/create-doctor.component';
import { UpdateDoctorComponent } from './doctor/update-doctor/update-doctor.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { CreateAdminComponent } from './admin/create-admin/create-admin.component';
import { UpdateAdminComponent } from './admin/update-admin/update-admin.component';
import { AppointmentListComponent } from './appointment/appointment-list/appointment-list.component';
import { CreateAppointmentComponent } from './appointment/create-appointment/create-appointment.component';
import { UpdateAppointmentComponent } from './appointment/update-appointment/update-appointment.component';
import { AvailabilityListComponent } from './availabilitydates/availability-list/availability-list.component';
import { CreateAvailabilityComponent } from './availabilitydates/create-availability/create-availability.component';
import { UpdateAvailabilityComponent } from './availabilitydates/update-availability/update-availability.component';
import { FeedbackListComponent } from './feedback/feedback-list/feedback-list.component';
import { CreateFeedbackComponent } from './feedback/create-feedback/create-feedback.component';
import { UpdateFeedbackComponent } from './feedback/update-feedback/update-feedback.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { CreatePatientComponent } from './patient/create-patient/create-patient.component';

import { UpdatePatientComponent } from './patient/update-patient/update-patient.component';





@NgModule({
  declarations: [
    LandingPageComponent,

    CreateUserComponent,
    UpdateUserComponent,
    UserListComponent,
    DoctorListComponent,
    CreateDoctorComponent,
    UpdateDoctorComponent,
    AdminListComponent,
    CreateAdminComponent,
    UpdateAdminComponent,
    AppointmentListComponent,
    CreateAppointmentComponent,
    UpdateAppointmentComponent,
    AvailabilityListComponent,
    CreateAvailabilityComponent,
    UpdateAvailabilityComponent,
    FeedbackListComponent,
    CreateFeedbackComponent,
    UpdateFeedbackComponent,
    PatientListComponent,
    CreatePatientComponent,

    UpdatePatientComponent,


  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    FormsModule,

  ]
})
export class LandingPageModule { }
