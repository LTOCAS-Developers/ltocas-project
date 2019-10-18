import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Observable,of } from 'rxjs';

import { Injectable } from '@angular/core';
import {  catchError } from 'rxjs/operators';

import { ServiceService } from 'src/app/service.service';
import { Topics } from './topic';


@Injectable()
export class TopicDataResolverService implements Resolve<Topics[] | string>{
    constructor(private service:ServiceService){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Topics[] | string> {
          return this.service.getTopics()
       .pipe(
        catchError((err:string) =>  of(err))
        );
        console.log(this.service.getTopics())
        }

}