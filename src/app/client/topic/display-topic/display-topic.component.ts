import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialogue.service';
import { Topics } from 'src/app/models.ts/topic';

@Component({
  selector: 'app-display-topic',
  templateUrl: './display-topic.component.html',
  styleUrls: ['./display-topic.component.css']
})
export class DisplayTopicComponent implements OnInit {
 
private viewTopic:number;
  constructor(private _route:ActivatedRoute,
    private Service:ServiceService,
    private _router:Router,
    private confirmationDialogService:ConfirmationDialogService
    
  ) { }
  private _id:number;
  private selectedTopic:Topics;

  ngOnInit() {
    this.viewTopic=+this._route.snapshot.paramMap.get('id');
    this._route.paramMap.subscribe(params=>{
      this._id=+params.get('id');
      this.Service.getTopic(this._id).subscribe(
        (topic)=>{this.selectedTopic=topic as Topics ,
          console.log(this.selectedTopic);
        },
        (err:any)=>console.log(err)
      )
    })
  }

  editTopic(){
    console.log(this.selectedTopic);
    this._router.navigate(['client-portal/topic/addtopic/'+this._id])
  }
  addTopic(){
    this._router.navigate(['client-portal/topic/addtopic'])
  }
  openConfirmationDialog(){
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
.then( (confirmed)=>

{ if(confirmed){
    this.Service.deletetopic(this._id).subscribe(
      ()=> this._router.navigateByUrl('client-portal/topic/topicshow')
      )
    
  }}
)
.catch(()=>console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
}
