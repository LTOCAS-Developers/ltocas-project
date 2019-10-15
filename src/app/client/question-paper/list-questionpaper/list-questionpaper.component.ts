import { Component, OnInit } from '@angular/core';
import { questionPaper } from '../create-questionpaper/questionpaper';
import { ServiceService } from 'src/app/service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-questionpaper',
  templateUrl: './list-questionpaper.component.html',
  styleUrls: ['./list-questionpaper.component.css']
})
export class ListQuestionpaperComponent implements OnInit {

  constructor(private service:ServiceService,
    private _router:Router,
    private _route:ActivatedRoute,) {
   
    const resolvedData: questionPaper[] | string = this._route.snapshot.data['questionpaperlist'];
    if (Array.isArray(resolvedData)) {

      this.listQuestionPaper = resolvedData;

    }
    else {
      this.error = resolvedData;
    }
    this.listQuestionPaper = this._route.snapshot.data['questionpaperlist'];
     
   }
   
   error:string; 
listQuestionPaper:questionPaper[]=[]
  ngOnInit() {
   

  }

}
