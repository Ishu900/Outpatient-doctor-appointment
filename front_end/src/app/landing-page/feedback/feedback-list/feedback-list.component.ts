import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/model/feedback';
import { FeedbackService } from 'src/app/service/feedback.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

  feedbacks: Feedback[];


  constructor(private feedbackService: FeedbackService, private router: Router) { }

  ngOnInit(): void {
    this.getFeedbacks();
  }

  getFeedbacks(){
    this.feedbackService.getFeedbackList().subscribe(data => {
      this.feedbacks = data;
    });
  }

  updateFeedback(id: number){
    console.log(id);
    this.router.navigate(['/landing-page/update-feedback', id]);
  }



  deleteFeedback(id: number){
    // console.log(id);
    // this.router.navigate(['/landing-page/delete-user', id]);
    this.feedbackService.deleteFeedback(id).subscribe(
      data => {
        console.log(data);
        this.getFeedbacks();
      }, error => {
        console.log("Not Delete")
      }
    )

}

}
