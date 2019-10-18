import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Batches } from '../batch';

@Component({
  selector: 'app-new-batch',
  templateUrl: './new-batch.component.html',
  styleUrls: ['./new-batch.component.css']
})
export class NewBatchComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private service: ServiceService,
    private _route: ActivatedRoute,
    private _router: Router) { }
  batchForm: FormGroup;
  submitted = false;
  panelTitle: string;
  demo: Batches;
  newBatchid: number;

  ngOnInit() {

    this.batchForm = this.fb.group({
      name: ['', Validators.required]
    });


    this._route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.newBatchid = id;
      if (id === 0) {
        this.newBatch();
      }
      else {
        this.getBatch(id);
      }
    })

  }
  getBatch(id: number) {
    throw new Error("Method not implemented.");
  }

  private newBatch() {
    {  
      this.submitted = false;
      this.batchForm.reset();
      this.batchForm = this.fb.group({
        name: ['', Validators.required],
        clientPojo: this.fb.group({
          id: [0],
          companyName: ""
        })

      });
      this.panelTitle = "Batch";


    }

  }
  get f() { return this.batchForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.batchForm.invalid) {
      return;
    }
    else {
      if (this.newBatchid === 0) {

        this.service.batchRegister(this.batchForm.value).subscribe(
          (data: Batches) => {
            console.log(data)
            this._router.navigate(["client-portal/batch/list"]);

          },
          error => alert('Registration Failed!' + error)
        );
      }
      else {
        this.batchForm.value.id = this.newBatchid;
        this.service.updateBatch(this.batchForm.value).subscribe(
          () => {
            console.log(this.batchForm.value);
            this.batchForm.reset();
            this._router.navigate(['client-portal/batch/list']);
          },
          (error: any) => console.log(error)
        );
      }
    }
  }
}
