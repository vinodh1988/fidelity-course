import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';
import { review } from 'src/app/model/reviews';
import { LogstatusService } from 'src/app/services/logstatus.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
reviews:review[];
status:boolean;
  constructor(public rs:ReviewService,public  ls:LogstatusService) {
      this.status=this.ls.getStatus();
   }

  ngOnInit(): void {
     if(this.status)
       this.rs.getReviews(localStorage.getItem("token")).subscribe(
         (reviews:review[])=>this.reviews=reviews,
         ()=>this.reviews=[]
       )
  }

}
