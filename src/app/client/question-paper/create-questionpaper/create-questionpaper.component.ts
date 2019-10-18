import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { questionPaper } from './questionpaper';

@Component({
  selector: 'app-create-questionpaper',
  templateUrl: './create-questionpaper.component.html',
  styleUrls: ['./create-questionpaper.component.css']
})
export class CreateQuestionpaperComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private service:ServiceService,
    private _route:ActivatedRoute,
    private _router:Router) { 

      
   
    }
    questionPaperForm:FormGroup;
    submitted=false;
    panelTitle:string;
    newQuestionPaper:questionPaper;
    newQuestionPaperid:number;

  ngOnInit() {
    this.questionPaperForm=this.fb.group({
      name:['',Validators.required]
    })
    this._route.paramMap.subscribe(params=>{
      const id=+params.get('id');
      this.newQuestionPaperid=id;
      if(id===0){
        this.newQuestionPaper
      }
      else{
        this.getQuestionPaper(id);
      }
    })
  }
getQuestionPaper(id:number){
  this.service.getQuestionPaper(id).subscribe(
    (questionPaper:questionPaper) => this.editQuestionPaper(questionPaper),
    (err:any)=>console.log(err)
  );
}
editQuestionPaper(newquestionPaper:questionPaper){
  this.panelTitle="Edit QuestionPaper";
  this.questionPaperForm.patchValue({
    name:questionPaper.name,
  })
}
private newQuestionpaper(){
  this.submitted=false;
  this.questionPaperForm.reset();
  this.questionPaperForm=this.fb.group({
    name:['',Validators.required]
  })
this.panelTitle="create QuestionPaper"
}
get f(){
  return this.questionPaperForm.controls;
}

onSubmit(): void {
  this.submitted = true;
  // stop here if form is invalid
  if (this.questionPaperForm.invalid) {
    return;
  }
  else {
    if (this.newQuestionPaperid === 0) {

      this.service.questionPaperCreate(this.questionPaperForm.value).subscribe(
        (data: questionPaper) => {
          console.log(data)
          this.questionPaperForm.reset();
          this._router.navigate(["client-portal/questionPaper/list"]);

        },
        error => alert('Registration Failed!' + error)
      );
    }
    else {
      this.questionPaperForm.value.id = this.newQuestionPaperid;
      this.service.updateQuestionPaper(this.questionPaperForm.value).subscribe(
        () => {
          console.log(this.questionPaperForm.value);
          this.questionPaperForm.reset();
          this._router.navigate(['client-portal/list']);
        },
        (error: any) => console.log(error)
      );
    }
  }


}
}
