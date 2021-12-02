import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedback } from 'src/app/model/feedback';
import { FeedbackService } from 'src/app/service/feedback.service';

@Component({
  selector: 'app-update-feedback',
  templateUrl: './update-feedback.component.html',
  styleUrls: ['./update-feedback.component.css']
})
export class UpdateFeedbackComponent implements OnInit {

  id: number;
  feedback: Feedback = new Feedback();

  constructor(private feedbackService: FeedbackService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.feedbackService.getFeedbackById(this.id).subscribe(
      data => {
        this.feedback=data;
      }, error => console.log(error)
    );
  }

  saveFeedback(){
    this.feedbackService.updateFeedback(this.id, this.feedback).subscribe(data =>{
        this.goToFeedbackList();
    }, error => console.log(error));
  }

  goToFeedbackList(){
    this.router.navigate(['/landing-page/feedback-list'])
  }

}
