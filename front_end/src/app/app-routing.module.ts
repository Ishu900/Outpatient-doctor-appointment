import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './landing-page/user/create-user/create-user.component';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [


  {path:'login', component: LoginComponent},
  {path:'registration', component: RegistrationComponent},

  {path:'', redirectTo:'login', pathMatch:'full'},

  {
    path: 'landing-page',
    loadChildren: () => import('../app/landing-page/landing-page.module').then(m => m.LandingPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
