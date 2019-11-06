import { Question } from 'src/app/models.ts/question';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialogue.service';

@Component({
  selector: 'app-display-question',
  templateUrl: './display-question.component.html',
  styleUrls: ['./display-question.component.css']
})
export class DisplayQuestionComponent implements OnInit {

  private _id:number;
  private selectedQuestion: Question;
  
  constructor(private __route:ActivatedRoute,
    private service:ServiceService,
    private _route:ActivatedRoute,
    private _router : Router,
    private confirmationDialogService:ConfirmationDialogService) { }

  ngOnInit() {
    this._route.paramMap.subscribe(params =>{
      this._id =+params.get("id");
      this.service.getQuestionsById(this._id).subscribe(
        (data)=>this.selectedQuestion = data,
        (err:any) => console.log(err)
      );
    });
  }
  viewNextQuestion(){
    if(this._id < 11){
      this._id = this._id +1;
      }
      else{
        this._id=1;
      }
      this._router.navigate(["client-portal/question/display",this._id],
      {
        queryParamsHandling: 'preserve'
      });
  }

  editQuestion(){
    this._router.navigate(["client-portal/question/create",this._id]);
  }

  openConfirmationDialog(id:number){
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
    .then((confirmed) =>  {
      if(confirmed){
        this.service.deleteQuestion(id).subscribe(
          ()=>this._router.navigate(["client-portal/question/list"])
        
    )} })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    
      
    }
   
  }
 
