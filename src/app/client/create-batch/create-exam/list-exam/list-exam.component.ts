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
    public exams:Exam[]=[];
    private _id:number;
    private examIds:number[]=[];
    examIdsLength:number;
private selectedExamId:number;
private ExamId:number;
  ngOnInit() {

    this.__route.paramMap.subscribe(params => {
      this._id =+params.get("id"); //to read the route parametre value in this we are getting id
    });
    this.service.getExamsByBatchId( this._id).subscribe(
      (exams)=> {
        this.exams =exams as Exam[];
        for(let i=0;i<this.exams.length;i++){
          this.examIds.push(this.exams[i].id);
        }
        console.log(this.examIds)
        localStorage.setItem('updatedExamIds',JSON.stringify(this.examIds))
      }
    )  
    
   this.__route.queryParams.subscribe(params => {
  this.selectedExamId = +params['examId'];
  console.log(this.selectedExamId); // Print the parameter to the console. 
});
console.log("haiii")
console.log(this.selectedExamId);
  }
 onSelect(examId:number){
 this._router.navigate(["client-portal/batch/exam/",+examId]);
this.ExamId=examId;

  }
 

}
