import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Clients } from '../models.ts/models';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialogue.service';
import { ListClientComponent } from '../list-client/list-client.component';

@Component({
  selector: 'app-displays-client',
  templateUrl: './displays-client.component.html',
  styleUrls: ['./displays-client.component.css']
})
export class DisplaysClientComponent implements OnInit {
  private selectedClient: Clients;
 private selectedClientId: number;
 private listClient:ListClientComponent;
 private _id:number;
 @Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>();
 private deleteConfirmed:boolean;
 private selectedClient1: Clients;




  constructor(private __route:ActivatedRoute,
    private service:ServiceService,
    private _route:ActivatedRoute,
    private _router : Router,
    private confirmationDialogService:ConfirmationDialogService) { }

  ngOnInit() {
    this.__route.paramMap.subscribe(params => {
      this._id =+params.get("id"); //to read the route parametre value in this we are getting id
     this.service.getClient(this._id).subscribe(
       (client) => this.selectedClient =client,
       (err:any) => console.log(err)
     );
    });
  }
 
  editClient(){
    this._router.navigate(["admin-portal/edit",this._id],
    ); 

  }
  public openConfirmationDialog() {
    
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
    .then((confirmed) =>      
   
   { if(confirmed){   
     console.log(this.selectedClient.sno)
      this.service.deleteClient(this._id).subscribe(
        () => this._router.navigateByUrl("admin-portal/list-client")
  )
          this.notifyDelete.emit(this.selectedClient.sno);
     }}
    
         )
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  
    
  }
 
  viewNextClient() {
    if(this._id < 11){
    this._id = this._id +1;
    }
    else{
      this._id=1;
    }
    this._router.navigate(["admin-portal/clients",this._id],
    {
      queryParamsHandling: 'preserve'
    });
  }
  


}
