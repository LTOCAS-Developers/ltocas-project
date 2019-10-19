
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.css']
})
export class CreateQuestionsComponent implements OnInit {
  

  constructor(private fb:FormBuilder,public service:ServiceService) { }

  createQuestions : FormGroup;
  submitted = false;

  ngOnInit() {
    this.createQuestions = this.fb.group({
      course:['',Validators.required],
      question:['',Validators.required],
      option1:['',Validators.required],
      option2: ['',Validators.required],
      option3: ['',Validators.required],
      option4:['',Validators.required],
      answer:['',Validators.required],
    })
  }

  onSubmit(){
    this.submitted = true;

    if (this.createQuestions.invalid) {
      return;
  }

  }
}


