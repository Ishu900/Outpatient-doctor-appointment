import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Availabledates } from 'src/app/model/availabledates';
import { AvailabledatesService } from 'src/app/service/availabledates.service';

@Component({
  selector: 'app-update-availability',
  templateUrl: './update-availability.component.html',
  styleUrls: ['./update-availability.component.css']
})
export class UpdateAvailabilityComponent implements OnInit {

  id: number;
  availabledate: Availabledates = new Availabledates();

  constructor(private availabledateService: AvailabledatesService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.availabledateService.getAvailabledatesById(this.id).subscribe(
      data => {
        this.availabledate=data;
      }, error => console.log(error)
    );
  }


  saveAvailitydate(){
    this.availabledateService.updateAvailabledates(this.id, this.availabledate).subscribe(data =>{
        this.goToAvailablilitydateList();
    }, error => console.log(error));
  }

  goToAvailablilitydateList(){
    this.router.navigate(['/landing-page/availabilitydates-list'])
  }

}
