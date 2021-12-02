import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { CreateAdminComponent } from './admin/create-admin/create-admin.component';
import { UpdateAdminComponent } from './admin/update-admin/update-admin.component';
import { AppointmentListComponent } from './appointment/appointment-list/appointment-list.component';
import { CreateAppointmentComponent } from './appointment/create-appointment/create-appointment.component';
import { UpdateAppointmentComponent } from './appointment/update-appointment/update-appointment.component';
import { AvailabilityListComponent } from './availabilitydates/availability-list/availability-list.component';
import { CreateAvailabilityComponent } from './availabilitydates/create-availability/create-availability.component';
import { UpdateAvailabilityComponent } from './availabilitydates/update-availability/update-availability.component';
import { CreateDoctorComponent } from './doctor/create-doctor/create-doctor.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { UpdateDoctorComponent } from './doctor/update-doctor/update-doctor.component';
import { CreateFeedbackComponent } from './feedback/create-feedback/create-feedback.component';
import { FeedbackListComponent } from './feedback/feedback-list/feedback-list.component';
import { UpdateFeedbackComponent } from './feedback/update-feedback/update-feedback.component';

import { LandingPageComponent } from './landing-page.component';
import { CreatePatientComponent } from './patient/create-patient/create-patient.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { UpdatePatientComponent } from './patient/update-patient/update-patient.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { UserListComponent } from './user/user-list/user-list.component';



const routes: Routes = [
  {path: '', component: LandingPageComponent, children:[

    {path:'user-list', component:UserListComponent},
    {path:'create-user', component: CreateUserComponent},
    {path: 'update-user/:id', component: UpdateUserComponent},

    {path:'doctor-list', component:DoctorListComponent},
    {path:'create-doctor', component: CreateDoctorComponent},
    {path: 'update-doctor/:id', component: UpdateDoctorComponent},

    {path:'patient-list', component:PatientListComponent},
    {path:'create-patient', component: CreatePatientComponent},
    {path: 'update-patient/:id', component: UpdatePatientComponent},

    {path:'admin-list', component:AdminListComponent},
    {path:'create-admin', component: CreateAdminComponent},
    {path: 'update-admin/:id', component: UpdateAdminComponent},

    {path:'appointment-list', component:AppointmentListComponent},
    {path:'create-appointment', component: CreateAppointmentComponent},
    {path: 'update-appointment/:id', component: UpdateAppointmentComponent},

    {path:'availabilitydates-list', component:AvailabilityListComponent},
    {path:'create-availabilitydates', component: CreateAvailabilityComponent},
    {path: 'update-availabilitydates/:id', component: UpdateAvailabilityComponent},

    {path:'feedback-list', component:FeedbackListComponent},
    {path:'create-feedback', component: CreateFeedbackComponent},
    {path: 'update-feedback/:id', component: UpdateFeedbackComponent},



  ]},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
