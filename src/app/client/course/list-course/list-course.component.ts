import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Courses } from 'src/app/models.ts/course';


@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {

  private courses:Courses[]=[];
  error: string;
 viewedId:number;
 private courseIds:number[]=[];
 public _id:number;

  constructor(private service: ServiceService,
    private _route: ActivatedRoute,
    private _router: Router) {

    
     }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this._id =+params.get("id");
      this.viewedId=this._id; //to read the route parametre value in this we are getting id
    });   
     this.service.getCourses().subscribe(
      (courses)=> {
        this.courses =courses as Courses[];
        for(let i=0;i<this.courses.length;i++){        
          this.courseIds.push(this.courses[i].id);
          console.log("course.id")
          console.log(this.courseIds)
        }        
        localStorage.setItem('updatedCourseIds',JSON.stringify(this.courseIds))
        
      }
    )
  }
  onSelect(CoursesId:Number){
    console.log(+CoursesId);
    this._router.navigate(['client-portal/course/'+CoursesId]);
  }
}
