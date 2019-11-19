import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  constructor(
    public router:Router,
    public route:ActivatedRoute
  ){
   
  }

  ngOnInit(){}
  
  backToList(){
    this.router.navigate(['client-portal/topic/topicshow'])

  }
}
