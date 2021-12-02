import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){

    localStorage.removeItem('userid');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('role');

    this.router.navigate(['/login']);

  }

}
