import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseAndTopicIds } from 'src/app/models.ts/CourseAndTopicIds';
import { QuesQuesPaperAsso } from 'src/app/models.ts/quespaperasso';
import { Courses } from 'src/app/models.ts/course';
import { Topics } from 'src/app/models.ts/topic';


@Component({
  selector: 'app-question-paper-asso',
  templateUrl: './question-paper-asso.component.html',
  styleUrls: ['./question-paper-asso.component.css']
})
export class QuestionPaperAssoComponent implements OnInit {

  courses: Courses[] = [];
  selectedTopics: Topics[] = [];
  topics: Topics[] = [];
  questionsByCourseAndTopic: any[] = [];
  error: string;
  getQuestionPaperForm: FormGroup;
  private selectedOptions:number[]=[];
  private seletedQuestionsId: number[] = [];
  private showTopic: boolean = false;
  private submitted: boolean;
  private checked: boolean;
  private showQuestions:boolean=false;
  private title:string;
  private courseTopicIds: CourseAndTopicIds;
  private courseAndTopicIds = new CourseAndTopicIds();
  private quesQuesPaperAsso = new QuesQuesPaperAsso();
  private disableAssociate: boolean = true;
  private showAssociate: boolean = false;
  constructor(private fb: FormBuilder,
    private service: ServiceService,
    private _router: Router,
    private _route: ActivatedRoute) {
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
    this.getQuestionPaperForm = this.fb.group({

      course: ["", Validators.required],
      topic: ["", Validators.required]

    });
    this._route.paramMap.subscribe(params => {
      this.quesQuesPaperAsso.questionPaperId = +params.get('id');
    })
  }


  onSubmit() {
    this.submitted = true;
    this.showAssociate
    // stop here if form is invalid
    if (this.getQuestionPaperForm.invalid) {
      return;
    }

    if (this.questionsByCourseAndTopic.length === 0) {
      this.showAssociate = true;

    }
    this.courseAndTopicIds.courseId = this.selectedCourseId.value;
    this.courseAndTopicIds.topicId = this.selectedTopicId.value;
    this.service.findQuestionsByCourseAndTopic(this.courseAndTopicIds).subscribe
      (
        (questions) => {
        this.questionsByCourseAndTopic = questions as any;
        this.selectedOptions=Object.assign([],  this.quesQuesPaperAsso.questionsId);
        if(questions!=null){
          this.showQuestions=true;

        }


        }

      );
     this.selectedOptions=Object.assign([],  this.quesQuesPaperAsso.questionsId);

  }

  get f() { return this.getQuestionPaperForm.controls; }


  getTopicById(event) {
    this.submitted = false;

    this.showTopic = true;
    console.log(this.selectedCourseId.value);
    if (this.selectedCourseId.value != "") {
      this.service.findQuestionsTopicByCourseId(this.selectedCourseId.value).subscribe(
        (data) => {
          this.selectedTopics = data as Topics[];
          console.log(this.selectedTopics)
          if(this.selectedTopics==null){
            this.title="Create Questions";
          }
          else{
            this.title="Questions";
          }
          this.getQuestionPaperForm.controls['topic'].setValue("");

        }
      )
    }
  }

  getSelectedQuestionsId(qId, i) {
    var index = this.quesQuesPaperAsso.questionsId.indexOf(qId);


    if (index === -1) {
      this.quesQuesPaperAsso.questionsId.push(qId);
      this.selectedOptions=Object.assign([],  this.quesQuesPaperAsso.questionsId);

    }
    else {
      this.quesQuesPaperAsso.questionsId.splice(index, 1);
      this.selectedOptions=Object.assign([],  this.quesQuesPaperAsso.questionsId);
    }
    if (this.quesQuesPaperAsso.questionsId.length === 0) {
      this.disableAssociate = true;

    } else {
      this.disableAssociate = false;

    }

    console.log(this.quesQuesPaperAsso);
    // for(let j=0;j<this.quesQuesPaperAsso.questionsId.length;i++){

    //   this.questionsByCourseAndTopic[i].checked;

    // }


  }
  associateQuesQuesPaper() {
    this.service.associateQuesQuesPaper(this.quesQuesPaperAsso).subscribe(
      (data) => {
        console.log(this.quesQuesPaperAsso)
        console.log("helooo")

      }
    );
  }
  get selectedCourseId() {
    return this.getQuestionPaperForm.get("course");
  }
  get selectedTopicId() {
    return this.getQuestionPaperForm.get("topic");
  }


}
