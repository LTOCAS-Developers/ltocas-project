import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { Exam } from 'src/app/models.ts/exam';

@Component({
  selector: 'app-list-exam',
  templateUrl: './list-exam.component.html',
  styleUrls: ['./list-exam.component.css']
})
export class ListExamComponent implements OnInit {

  constructor( private __route:ActivatedRoute,
    private service:ServiceService,
    private _router : Router,) { }
    private exams:Exam[]=[];
    private _id:number;

  ngOnInit() {

    this.__route.paramMap.subscribe(params => {
      this._id =+params.get("id"); //to read the route parametre value in this we are getting id
     
    });
    console.log( this._id)
    this.service.getExamsByBatchId( this._id).subscribe(
      (exams)=> {
        this.exams =exams as Exam[];

      }
    )   
   
  }
  onSelect(examId:number){

    this._router.navigate(["client-portal/batch/exam/", examId]);

  }

}
