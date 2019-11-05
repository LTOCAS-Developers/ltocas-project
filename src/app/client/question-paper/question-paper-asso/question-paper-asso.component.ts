import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Courses } from '../../course/course';
import { ServiceService } from 'src/app/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Topics } from '../../topic/topic';
import { CourseAndTopicIds } from 'src/app/models.ts/CourseAndTopicIds';
import { QuesQuesPaperAsso } from 'src/app/models.ts/quespaperasso';


@Component({
  selector: 'app-question-paper-asso',
  templateUrl: './question-paper-asso.component.html',
  styleUrls: ['./question-paper-asso.component.css']
})
export class QuestionPaperAssoComponent implements OnInit {

  courses:Courses[]=[];
  selectedTopics:Topics[]=[];
  topics:Topics[]=[];
  questionsByCourseAndTopic:any[]=[];
  error:string;
  getQuestionPaperForm:FormGroup;
  private seletedQuestionsId:number[]=[];
  private showTopic:boolean=false;
 private submitted: boolean;
 private courseTopicIds:CourseAndTopicIds;
 private courseAndTopicIds =new CourseAndTopicIds();
 private quesQuesPaperAsso=new QuesQuesPaperAsso();
  constructor(private fb: FormBuilder,
    private service:ServiceService,
    private _router:Router,
    private _route:ActivatedRoute) { 
    const resolvedCourse: Courses[] | string = this._route.snapshot.data['courseList'];
     const resolvedTopic: Topics[] | string = this._route.snapshot.data['topicList'];

    if (Array.isArray(resolvedCourse)) {

      this.courses = resolvedCourse;

    }
    else {
      this.error = resolvedCourse;
    }
    if (Array.isArray(resolvedTopic)) {

      this.topics = resolvedTopic;

    }
    else {
      this.error = resolvedTopic;
    }
  }

  ngOnInit() {
this.getQuestionPaperForm=this.fb.group({

  course:["",Validators.required],
  topic:["",Validators.required]

});
this._route.paramMap.subscribe(params => {
  this.quesQuesPaperAsso.questionPaperId = +params.get('id');
})

  }


  onSubmit(){  
    this.submitted = true;
  // stop here if form is invalid
  if (this.getQuestionPaperForm.invalid) {
    return;
  }
  
 this.courseAndTopicIds.courseId=this.selectedCourseId.value;
 this.courseAndTopicIds.topicId=this.selectedTopicId.value;
  this.service.findQuestionsByCourseAndTopic(this.courseAndTopicIds).subscribe
  (
    (questions) => {this.questionsByCourseAndTopic=questions as any;

    }

  );
  
  }
  
  get f() { return this.getQuestionPaperForm.controls; }


  getTopicById(event){
    this.submitted = false;
    
    this.showTopic=true;
    console.log(this.selectedCourseId.value);
    if(this.selectedCourseId.value !=""){
      this.service.findQuestionsTopicByCourseId(this.selectedCourseId.value).subscribe(
        (data)=> {
          this.selectedTopics=data as Topics[];
          this.getQuestionPaperForm.controls['topic'].setValue("");
          
        }
      )
    }


  }

  getSelectedQuestionsId(qId){
    this.quesQuesPaperAsso.questionsId.push(qId);
    console.log(this.quesQuesPaperAsso);

  }
  associateQuesQuesPaper(){
    this.service.associateQuesQuesPaper(this.quesQuesPaperAsso).subscribe(
(data) => {
  console.log(this.quesQuesPaperAsso)
  console.log("helooo")

}
    );
  }
  get selectedCourseId(){
    return this.getQuestionPaperForm.get("course");
  }
  get selectedTopicId(){
    return this.getQuestionPaperForm.get("topic");
  }
  

}
