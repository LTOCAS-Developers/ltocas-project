import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Topics } from '../../../models.ts/topic';
import { Observable } from 'rxjs';
import { Courses } from 'src/app/models.ts/course';

@Component({
  selector: 'app-new-topic',
  templateUrl: './new-topic.component.html',
  styleUrls: ['./new-topic.component.css']
})
export class NewTopicComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private service: ServiceService,
    private _route: ActivatedRoute,
    private _router: Router) { }
  topicForm: FormGroup;
  submitted = false;
  panelTitle: string;
  private topic = new Topics();
  newTopicid: number;
  private courseId: number;
  public courses: Courses[] = [];

  ngOnInit() {
      this.topicForm = this.fb.group({
      topic: ['', Validators.required],
      course: ['', Validators.required]
    });

    this._route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.newTopicid = id;

      if (id === 0) {
        this.newTopic();
      }
      else {
        this.getQuestionTopic(id);
      }
    })

    this.service.getCourses().subscribe(
      (data) => {
        this.courses = data as Courses[];
        console.log(this.courses)
      })

  }
  getQuestionTopic(id: number) {
    this.service.getTopic(id).subscribe(
      (existingTopic: Topics) => {
        this.updateTopic(existingTopic),
        console.log(existingTopic),
        (err: any) => console.log(err)
      }
    )
  }

  private updateTopic(topic: Topics) {
    this.panelTitle = "Edit Topic";
    console.log(topic.topic)
    this.topicForm.patchValue({
      name: topic.topic,
coursePojo:{
  id:topic.coursePojo.id,
  name:topic.coursePojo.name
}


    })
  }
  private newTopic() {
    {
      this.submitted = false;
      this.topicForm.reset();
      this.topicForm = this.fb.group({
        topic: ['', Validators.required],
        course: ["", Validators.required]
      });
      this.panelTitle = "QuestionsTopics";


    }

  }
  get f() { return this.topicForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.topicForm.invalid) {
      return;
    }
    else {
      this.topic.topic = this.topicForm.get('topic').value;
      this.topic.coursePojo.id = this.topicForm.get('course').value
      if (this.newTopicid === 0) {

        this.service.topicRegister(this.topic).subscribe(
          (data: Topics) => {
            console.log(data)
            // this.topicForm.reset();
            this._router.navigate(["client-portal/topic/topicshow"]);

          },
          error => alert('Registration Failed!' + error)
        );
      }
      else {
        this.topicForm.value.id=this.newTopicid;
        this.service.updateTopic(this.topicForm.value).subscribe(
          () => {
            console.log(this.topicForm.value);
            // this.topicForm.reset();
            this._router.navigate(['client-portal/topic/topicshow']);
          },
          (error: any) => console.log(error)
        );
      }
    }
  }

  moveToExamList() {
    this._router.navigate(['client-portal/topic/topicshow'])
  }

}
