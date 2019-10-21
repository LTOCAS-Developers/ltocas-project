import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { questionPaper } from '../create-questionpaper/questionpaper';

@Component({
  selector: 'app-display-question-paper',
  templateUrl: './display-question-paper.component.html',
  styleUrls: ['./display-question-paper.component.css']
})
export class DisplayQuestionPaperComponent implements OnInit {

  constructor(
    private __route:ActivatedRoute,
    private service:ServiceService,
    private _route:ActivatedRoute,
    private _router : Router,
  ) { }
private _id:number;
private selectedQuestionPaper:questionPaper;
  ngOnInit() {

    this.__route.paramMap.subscribe(params => {
      this._id =+params.get("id"); //to read the route parametre value in this we are getting id
     this.service.getQuestionPaper(this._id).subscribe(
       (questionPaper) => this.selectedQuestionPaper =questionPaper,
       (err:any) => console.log(err)
     );
    });
  }

}
