import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Courses } from '../../course/course';
import { ServiceService } from 'src/app/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Topics } from '../../topic/topic';
import { CourseAndTopicIds } from 'src/app/models.ts/CourseAndTopicIds';
import {MatListModule} from '@angular/material/list';
import { Question } from 'src/app/models.ts/question';


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
 private selectedCourse:number;
 private selectedTopicId:number;
 private submitted: boolean;
 private courseTopicIds:CourseAndTopicIds;
 private courseAndTopicIds =new CourseAndTopicIds();
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

  }
  onSubmit(){  
    this.submitted = true;
  // stop here if form is invalid
  if (this.getQuestionPaperForm.invalid) {
    return;
  }
  
 this.courseAndTopicIds.courseId=this.selectedCourse;
 this.courseAndTopicIds.topicId=this.selectedTopicId;
  this.service.findQuestionsByCourseAndTopic(this.courseAndTopicIds).subscribe
  (
    (questions) => {this.questionsByCourseAndTopic=questions as any;
    }

  );
  
  }
  
  get f() { return this.getQuestionPaperForm.controls; }

  getTopicById(){
this.service.findQuestionsTopicByCourseId(this.selectedCourse).subscribe(
  (data)=> {this.selectedTopics=data as Topics[];
  }
)
console.log(this.selectedCourse)

  }
  

}
