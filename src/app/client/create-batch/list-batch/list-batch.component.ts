import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { Batches } from '../../../models.ts/batch';
import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
 

@Component({
  selector: 'app-list-batch',
  templateUrl: './list-batch.component.html',
  styleUrls: ['./list-batch.component.css'] 
})
export class ListBatchComponent implements OnInit {

  batches: Batches[] = [];
  error: string;

  

  constructor(private service: ServiceService,
    private _route: ActivatedRoute,
    private _router: Router) {

      const resolvedData: Batches[] | string = this._route.snapshot.data['batcheslist'];
      console.log(resolvedData);
    if (Array.isArray(resolvedData)) {
      this.batches = resolvedData;
    }
    else {
      this.error = resolvedData;  
    }
    this.batches = this._route.snapshot.data['batcheslist'];
   }
public batchIds:number[]=[];
private selectedBatchId:number;

  ngOnInit() {
    const resolvedData: Batches[] | string = this._route.snapshot.data['batcheslist'];
      console.log(resolvedData);
    if (Array.isArray(resolvedData)) {
      this.batches = resolvedData;
    }
    else {
      this.error = resolvedData;  
    }
    this.batches = this._route.snapshot.data['batcheslist'];
    for(let i=0;i<this.batches.length;i++){
this.batchIds.push(this.batches[i].id);
    }
    console.log(this.batchIds);
    localStorage.setItem(
      'updatedBatchIds',
      JSON.stringify(this.batchIds)
    )
    this.selectedBatchId = +this._route.snapshot.paramMap.get("id");

   }





   get batchsId(){
    return this.batchIds
    }

   onSelect(batchId:number){
    this._router.navigate(["client-portal/batch", batchId]);
  }

  }



