import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from './../../../service.service';
import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models.ts/question';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.css']
})
export class ListQuestionsComponent implements OnInit {

  question :Question [] = [];
  error: String;

  constructor(private service : ServiceService,
    private _route : ActivatedRoute,
    private _router : Router) { 
      
      const resolvedData : Question [] | String = this._route.snapshot.data['questionslist'];
      console.log(resolvedData);

      if(Array.isArray(resolvedData)){

        this.question = resolvedData;
      }else{
        this.error = resolvedData; 
      }
      this.question = this._route.snapshot.data['questionslist'];
    }


  ngOnInit() {
    console.log("data");
  }


  onSelect(questionID:Number){
    this._router.navigate(['client-portal/question/display/'+questionID]);
  }
}
