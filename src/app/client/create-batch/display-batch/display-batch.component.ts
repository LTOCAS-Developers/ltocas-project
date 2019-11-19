import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { Batches } from 'src/app/models.ts/batch';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialogue.service';

@Component({
  selector: 'app-display-batch',
  templateUrl: './display-batch.component.html',
  styleUrls: ['./display-batch.component.css']
})
export class DisplayBatchComponent implements OnInit {

  constructor(
    private __route: ActivatedRoute,
    private service: ServiceService,
    private _router: Router,
    private confirmationDialogService:ConfirmationDialogService
  ) { }

  private _id: number;
  private selectedBatch: Batches;
  public upDatedBatchIds: number[] = [];


  @Output() batchNotify: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
    this.__route.paramMap.subscribe(params => {
      this._id = +params.get("batchid"); //to read the route parametre value in this we are getting id
      this.service.getBatch(this._id).subscribe(
        (batch) => this.selectedBatch = batch,
        (err: any) => console.log(err)
      );
    });


    this.upDatedBatchIds = JSON.parse(
      localStorage.getItem('updatedBatchIds')
    );
    console.log(this.upDatedBatchIds)
  }
  addExams(batchId: number) {
    this.service.changeBatchId(batchId);


    this._router.navigate(["client-portal/batch/" + this._id +
      "/createexam/0"]);
  }

  editBatch() {
    this._router.navigate(["client-portal/batch/edit/" + this._id]);

  }
  viewExams() {
    this._router.navigate(["/client-portal/batch/examslist/" + this._id]);

  }
  viewNextBatch(batchId) {

    let currentIdIndex: number = this.upDatedBatchIds.indexOf(batchId)
    if(this.upDatedBatchIds.length-1 === currentIdIndex){
      currentIdIndex=0;
    }
    else{
      currentIdIndex++;
    }
    this._router.navigate(["client-portal/batch/"+ this.upDatedBatchIds[currentIdIndex]]);

  }
  public openConfirmationDialog() {
    
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
    .then( (confirmed) =>      
   
   { if(confirmed){   
      this.service.deleteBatch(this._id).subscribe(
        () => this._router.navigateByUrl("client-portal/batch/list")
  )
     }}
    
         )
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  
    
  }
 
}
