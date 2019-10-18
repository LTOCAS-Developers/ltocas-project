import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Topics } from '../topic';

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
  demo: Topics;
  newTopicid: number;
   
  ngOnInit() {

    this.topicForm = this.fb.group({
      topic: ['', Validators.required]
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


  }
  getQuestionTopic(id: number) {
    throw new Error("Method not implemented.");
  }
 

  
  
  private newTopic() {
    {
      this.submitted = false;
      this.topicForm.reset();
      this.topicForm = this.fb.group({
        topic: ['', Validators.required],
        coursePojo: this.fb.group({
          id: [0],
          courseName: ""
        })

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
      if (this.newTopicid === 0) {


        this.service.topicRegister(this.topicForm.value).subscribe(
          (data: Topics) => {
            console.log(data)
            // this.topicForm.reset();
            this._router.navigate(["client-portal/topic/topicshow"]);

          },
          error => alert('Registration Failed!' + error)
        );
      }
      else {
        this.topicForm.value.id = this.newTopicid;
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

}
