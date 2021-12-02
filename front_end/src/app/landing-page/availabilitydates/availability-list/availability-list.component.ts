import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Availabledates } from 'src/app/model/availabledates';
import { AvailabledatesService } from 'src/app/service/availabledates.service';

@Component({
  selector: 'app-availability-list',
  templateUrl: './availability-list.component.html',
  styleUrls: ['./availability-list.component.css']
})
export class AvailabilityListComponent implements OnInit {


  availabledates: Availabledates[];

  constructor(private availabledatesService: AvailabledatesService, private router: Router) { }

  ngOnInit(): void {
    this.getAvailabledates();
  }

  getAvailabledates(){
    this.availabledatesService.getAvailabledatesList().subscribe(data => {
      this.availabledates = data;
    });
  }

  updateAvailabledates(id: number){
    console.log(id);
    this.router.navigate(['/landing-page/update-availabilitydates', id]);
  }



  deleteAvailabledates(id: number){
    // console.log(id);
    // this.router.navigate(['/landing-page/delete-user', id]);
    this.availabledatesService.deleteAvailabledates(id).subscribe(
      data => {
        console.log(data);
        this.getAvailabledates();
      }, error => {
        console.log("Not Delete")
      }
    )

}
}
