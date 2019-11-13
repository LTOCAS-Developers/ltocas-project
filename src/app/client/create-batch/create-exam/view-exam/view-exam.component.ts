import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialogue.service';
import { Exam } from 'src/app/models.ts/exam';

@Component({
  selector: 'app-view-exam',
  templateUrl: './view-exam.component.html',
  styleUrls: ['./view-exam.component.css']
})
export class ViewExamComponent implements OnInit {

  constructor(private __route:ActivatedRoute,
    private service:ServiceService,
    private _router : Router,
    private confirmationDialogService:ConfirmationDialogService) { }
    private _id:number;
    private selectedExam:Exam;

  ngOnInit() {
    this.__route.paramMap.subscribe(params => {
      this._id =+params.get("id"); //to read the route parametre value in this we are getting id
     this.service.getExam(this._id).subscribe(
       (exam) => {this.selectedExam =exam,
        console.log(this.selectedExam)
}
       , 
       (err:any) => console.log(err)
     );
    });
    

  }
  editBatch(){
    
  }
}
