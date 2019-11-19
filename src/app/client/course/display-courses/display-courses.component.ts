import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialogue.service';
import { Courses } from 'src/app/models.ts/course';

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
  public updatedCourseIds:number[]=[];

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
    this._router.navigate(["client-portal/course/addcourse/"+this._id]);
  }
  viewNextCourse(id:number){
    let currentCourseId:number=this.updatedCourseIds.indexOf(id)
    if(this.updatedCourseIds.length-1 === currentCourseId){
      currentCourseId=0
    }
    else{
      currentCourseId++;
    }
    console.log(currentCourseId)
    console.log("its is working")
   // console.log(this.updatedCourseIds([currentCourseId]))
      this._router.navigate(["client-portal/course",this._id])
     
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
    
    
}
