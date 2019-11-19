import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Exam } from 'src/app/models.ts/exam';
import { Batches } from 'src/app/models.ts/batch';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent implements OnInit {


  constructor(private fb: FormBuilder,
    private service: ServiceService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  private questionPapers: [] = [];
  private examForm: FormGroup;
  private submitted: boolean = false;
  private examData = new Exam();
  private batchId: number;


  ngOnInit() {

    this._route.params.forEach((urlParams) => {
      this.batchId = urlParams['batchid'];
    });
    console.log(this.batchId);


    this.examForm = this.fb.group({
      examName: ['', Validators.required],
      questionPaper: ["", Validators.required]
    });

    this.service.getQuestionPapers().subscribe
      (
        (questionPapers) => {
          this.questionPapers = questionPapers as any;
        }
      );
    this.examData.batchPojo.id = this.batchId;

  }

  get f() {
    return this.examForm.controls;
  }
  get selectedQuestionPaper() {
    return this.examForm.get('questionPaper');
  }

  onSubmit() {
    this.submitted = true;
    if (this.examForm.invalid) {
      return;
    }
    else {
      this.examData.name = this.examForm.get('examName').value;
      this.examData.questionPaperPojo.questionPaperId = this.selectedQuestionPaper.value;
      this.service.createExam(this.examData).subscribe(
        (data: Exam) => {
          console.log(data)
          this._router.navigate(["/client-portal/batch/examslist/" + this.batchId]);
        },
        error => alert('Registration Failed!' + error)

      )
    }

  }
  getBatchId(id: number) {
    console.log(id);
    console.log("hello")
  }


}
