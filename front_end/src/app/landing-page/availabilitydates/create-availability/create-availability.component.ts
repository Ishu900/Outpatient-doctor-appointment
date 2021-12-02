import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Availabledates } from 'src/app/model/availabledates';
import { AvailabledatesService } from 'src/app/service/availabledates.service';

@Component({
  selector: 'app-create-availability',
  templateUrl: './create-availability.component.html',
  styleUrls: ['./create-availability.component.css']
})
export class CreateAvailabilityComponent implements OnInit {
  id: number;
  availabledate: Availabledates = new Availabledates();
  constructor(private availabilitydateService: AvailabledatesService, private router: Router) { }

  ngOnInit(): void {
  }

  saveAvailabledate(){
    this.availabilitydateService.updateAvailabledates(this.id, this.availabledate).subscribe(data=>{
      console.log(data);
      this.goToAvailabledateList();
    }, error => console.log(error));
  }

  goToAvailabledateList(){
    this.router.navigate(['/landing-page/availabilitydates-list']);
  }

}
