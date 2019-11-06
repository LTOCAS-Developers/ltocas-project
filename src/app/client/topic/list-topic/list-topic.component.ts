import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Topics } from '../../../models.ts/topic';

@Component({
  selector: 'app-list-topic',
  templateUrl: './list-topic.component.html',
  styleUrls: ['./list-topic.component.css']
})
export class ListTopicComponent implements OnInit {

  topics: Topics[] = [];
  error: string;

  

  constructor(private service: ServiceService,
    private _route: ActivatedRoute,
    private _router: Router) {

      const resolvedData: Topics[] | string = this._route.snapshot.data['topicslist'];
    if (Array.isArray(resolvedData)) {
      this.topics = resolvedData;
      console.log(this.topics)
    }
    else {
      this.error = resolvedData;  
    }
    this.topics = this._route.snapshot.data['topicslist'];
   }



  ngOnInit() {
  }

}
