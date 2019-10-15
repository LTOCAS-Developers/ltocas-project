import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { Batches } from '../batch';
 

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
    if (Array.isArray(resolvedData)) {
      this.batches = resolvedData;
    }
    else {
      this.error = resolvedData;  
    }
    this.batches = this._route.snapshot.data['batcheslist'];
   }


  ngOnInit() {
  }

}
