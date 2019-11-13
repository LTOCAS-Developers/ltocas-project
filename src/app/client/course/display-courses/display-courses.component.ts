import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { Courses } from 'src/app/models.ts/course';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialogue.service';

@Component({
  selector: 'app-display-courses',
  templateUrl: './display-courses.component.html',
  styleUrls: ['./display-courses.component.css']
})
export class DisplayCoursesComponent implements OnInit {
 private viewedcourse: number;
  

  constructor(
    private _route:ActivatedRoute,
    private Service:ServiceService,
    private _router:Router,
    private confirmationDialogService:ConfirmationDialogService
  ) { }
  private _id:number;
  private selectedCourse:Courses;

  ngOnInit() {
    this.viewedcourse=+this._route.snapshot.paramMap.get('id');
    console.log(this.viewedcourse)
    this._route.paramMap.subscribe(params => {
      this._id =+params.get("id"); //to read the route parametre value in this we are getting id
     this.Service.getCourse(this._id).subscribe(
       (Courses) => this.selectedCourse =Courses,
       (err:any) => console.log(err)
     );
    });

  }
  showCourse:boolean=true
  addCourse(){
    this._router.navigate(["client-portal/course/addcourse"]);
}
  editCourse(){
    this._router.navigate(["client-portal/course/addcourse"]);
  }
  viewNextCourse(){
    if(this._id < 11){
      this._id = this._id +1;
      }
      else{
        this._id=1;
      }
      this._router.navigate(["client-portal/course",this._id],
      {
        queryParamsHandling: 'preserve'
      }); 
  }

  openConfirmationDialog(id:number){
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
    .then((confirmed) =>  {
      if(confirmed){
        this.Service.deleteCourse(id).subscribe(
          ()=>this._router.navigate(["client-portal/course/courselist"])
        
    )} })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    
      
    } 
    movetolist(){
      this._router.navigate(["client-portal/course/courselist"])
    }
}
