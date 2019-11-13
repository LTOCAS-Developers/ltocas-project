import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Batches } from '../../../models.ts/batch';

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
  private _id:number;

  ngOnInit() {

    this.batchForm = this.fb.group({
      name: ['', Validators.required]
    });


    this._route.paramMap.subscribe(params => {
       this._id = +params.get('id');
      if (this._id === 0) {
        this.newBatchid = this._id ;
        this.newBatch();
      }
      else {
        this.getBatch(this._id);
      }
    })

  }
  getBatch(id: number) {
    this.service.getBatch(id).subscribe(
      (existingBatch: Batches) => {this.editBatch(existingBatch),
      console.log(existingBatch)}
      ,
      (err: any) => console.log(err)
    );
  }

  private editBatch(batch:Batches){
    this.panelTitle = "Edit Batch";
    this.batchForm.patchValue({
      name:batch.name
    })


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
        this.batchForm.value.id = this._id;
        console.log(this.batchForm.value)
        this.service.updateBatch(this.batchForm.value).subscribe(
          () => {
            this.batchForm.reset();
            this._router.navigate(['client-portal/batch/list']);
          },
          (error: any) => console.log(error)
        );
      }
    }
  }
}
