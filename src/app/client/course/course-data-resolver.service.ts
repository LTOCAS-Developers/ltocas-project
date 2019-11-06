import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Observable,of } from 'rxjs';
import { Injectable } from '@angular/core';
import {  catchError } from 'rxjs/operators';
import { ServiceService } from 'src/app/service.service';
import { Courses } from 'src/app/models.ts/course';



@Injectable()
export class CourseDataResolverService implements Resolve<Courses[] | string>{
    constructor(private service:ServiceService){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Courses[] | string> {

          return this.service.getCourses()
       .pipe(
        catchError((err:string) =>  of(err))
        );
        console.log(this.service.getCourses())

        }

}