import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Courses } from '../course';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {


  constructor(private fb: FormBuilder,
    private service: ServiceService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  courseForm: FormGroup;
  submitted = false;
  panelTitle: string;
  demo: Courses;
  newCourseid: number;


  ngOnInit() {


    this.courseForm = this.fb.group({
      name: ['', Validators.required]

    });


    this._route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.newCourseid = id;
      if (id === 0) {
        this.newCourse();
      }
      else {
        this.getCourse(id);
      }
    })

  }
  getCourse(id: number) {
    throw new Error("Method not implemented.");
  }

  private newCourse() {
    {
      this.submitted = false;
      this.courseForm.reset();
      this.courseForm = this.fb.group({
        name: ['', Validators.required]
      });
      this.panelTitle = "Course";


    }

  }
  get f() { return this.courseForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.courseForm.invalid) {
      return;
    }
    else {
      if (this.newCourseid === 0) {

        this.service.courseRegister(this.courseForm.value).subscribe(
          (data: Courses) => {
            console.log(data)
            // this.courseForm.reset();
            this._router.navigate(["client-portal/course/courselist"]);

          },
          error => alert('Registration Failed!' + error)
        );
      }
      else {
        this.courseForm.value.id = this.newCourseid;
        this.service.updateCourse(this.courseForm.value).subscribe(
          () => {
            console.log(this.courseForm.value);
            // this.courseForm.reset();
            this._router.navigate(['client-portal/course/courselist']);
          },
          (error: any) => console.log(error)
        );
      }
    }
  }
}

