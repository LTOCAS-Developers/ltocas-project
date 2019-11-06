import { Topics } from './../../../models.ts/topic';
import { Question } from './../../../models.ts/question';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Courses } from 'src/app/models.ts/course';

@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.css']
})
export class CreateQuestionsComponent implements OnInit {
  
  courses: Courses[] = [];
  topics: Topics[] = [];
  createQuestions : FormGroup;
  submitted = false;
  error: string;
  private selectedCourseId : number;
  selectedTopic:Topics[]=[];
  newQuestionId : number;
  selectedTopicId:number;
  panelTitle:string;
  constructor(private fb:FormBuilder,public service:ServiceService, private _route: ActivatedRoute,
    private _router: Router) { 

      const resolvedDatas: Courses[] | string = this._route.snapshot.data['courseslist'];
      const resolvedData1: Topics[] | string = this._route.snapshot.data['topicslist'];
     
      if (Array.isArray(resolvedDatas)) {
        this.courses = resolvedDatas;
      }
      else {
        this.error = resolvedDatas;  
      }
      this.courses = this._route.snapshot.data['courseslist'];
 
      
      if (Array.isArray(resolvedData1)) {
        this.topics = resolvedData1;
      }
      else {
        this.error = resolvedData1;  
      }
      this.topics = this._route.snapshot.data['topicslist'];
       }

  
  

  ngOnInit() {
    this.createQuestions = this.fb.group({
      coursePojo:this.fb.group({
        id:["0",Validators.required],
        name:[,Validators.required]
      }),
      questionsTopicPojo:this.fb.group({
        id:["",Validators.required],
        topic:["",Validators.required]
   }),
      questions:['',Validators.required],
      option1:['',Validators.required],
      option2: ['',Validators.required],
      option3: ['',Validators.required],
      option4:['',Validators.required],
      answer:['',Validators.required]
    });

    this._route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.newQuestionId =id;
      if(id === 0){
         this.newQuestion();
      }else{
   this.getQuestion(id);
      }
  })
}

 

getQuestion(id: number) {
   this.service.getQuestionsById(id).subscribe(
     (quetion: Question) => this.editQuestion(quetion),
     (err: any) => console.log(err)
   );
}

  private newQuestion(){
    this.submitted=false;
    this.createQuestions = this.fb.group({
      coursePojo: this.fb.group({
        id:[this.selectedCourseId,Validators.required],
        name:['']
       }),
       questionsTopicPojo: this.fb.group({
         id:[this.selectedTopicId,Validators.required],
         topic:['']
       }),
       questions:['',Validators.required],
       option1:['',Validators.required],
       option2: ['',Validators.required],
       option3: ['',Validators.required],
       option4:['',Validators.required],
       answer:['',Validators.required]
     
    });
     
  }
  get f() { return this.createQuestions.controls; }

  editQuestion(question:Question){
    this.panelTitle = "Edit Question";
    this.createQuestions.patchValue({
      questionNumber:question.questionNumber,
      questions:question.questions,
      option1:question.option1,
      option2:question.option2,
      option3:question.option3,
      option4:question.option4,
      answer:question.answer,
      coursePojo:{
        id:question.coursePojo.id,
        name:question.coursePojo.name
      },
      questionsTopicPojo:{
        id:question.questionsTopicPojo.id,
        topic:question.questionsTopicPojo.topic,
    }})
    this.getTopicById();
 }

  onSubmit(){
    this.submitted=true;

    if(this.createQuestions.invalid){
      return;
    }else{
      if(this.newQuestionId === 0){
        console.log(this.createQuestions.value)
    this.service.createQuestions(this.createQuestions.value).subscribe(
      (data : Question)=>{
        console.log(data)
        this.createQuestions.reset
         this._router.navigate(["client-portal/question/list"]);

      },
        error => alert('Registration Failed!' + error)
    );
      }else{
        this.createQuestions.value.questionNumber = this.newQuestionId;

        this.service.editQuestion(this.createQuestions.value).subscribe(
          ()=>{
            this.createQuestions.reset
            this._router.navigate(["client-portal/question/list"]);
          }
        )
      }
      
     }  
  }
 
  getTopicById(){
    console.log(this.selectedCourseId);

      this.service.findQuestionsTopicByCourseId(this.selectedCourseId).subscribe(
        (data)=>this.selectedTopic = data
      )
    
    
   
  }

 

}


