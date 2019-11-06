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

  courses: Courses[] = [];
  error: string;

  constructor(private service: ServiceService,
    private _route: ActivatedRoute,
    private _router: Router) {

      const resolvedData: Courses[] | string = this._route.snapshot.data['courseslist'];
    if (Array.isArray(resolvedData)) {
      this.courses = resolvedData;
    }
    else {
      this.error = resolvedData;  
    }
    this.courses = this._route.snapshot.data['courseslist'];
     }

  ngOnInit() {
  }

}
