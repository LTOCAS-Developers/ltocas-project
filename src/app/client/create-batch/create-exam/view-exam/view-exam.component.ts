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
    public updatedExamId:number[]=[];

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
    
this.updatedExamId=JSON.parse(localStorage.getItem('updatedExamIds'))
  
console.log(this.updatedExamId)
}
  editExam(){
    console.log("this is called")
    this._router.navigate(["client-portal/batch/" + this._id +
    "/createexam/0"]);    
  }
  viewExamList(examId:number){
   // [routerLink]="['/client-portal/batch/examslist',{id:questionPaperId}]"
    this._router.navigate(['client-portal/batch/examslist/',+this.selectedExam.batchPojo.id],{ queryParams: { examId: examId } });

  }
  NextBatch(examId){
    let currentExamId:number=this.updatedExamId.indexOf(examId)
if(this.updatedExamId.length-1 === currentExamId){
  currentExamId=0
}else{
  currentExamId++;
}
console.log(currentExamId)
console.log(this.updatedExamId[currentExamId])
this._router.navigate(["client-portal/batch/exam/"+this.updatedExamId[currentExamId]])
  }
  public openConfirmationDialog() {
    
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
    .then((confirmed) =>      
   
   { if(confirmed){   
      this.service.deleteExam(this._id).subscribe(
        () => this._router.navigateByUrl("client-portal/batch/examslist/1")
  )
     }}
    
         )
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  
    
  }

}
