import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable,of } from 'rxjs';
import { ServiceService } from '../service.service';
import { Injectable } from '@angular/core';
import {  catchError } from 'rxjs/operators';
import { questionPaper } from './question-paper/create-questionpaper/questionpaper';

@Injectable()
export class QuestionPaperDataResolverService implements Resolve<questionPaper[] | string>{
    constructor(private service:ServiceService){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<questionPaper[] | string> {
          return this.service.getQuestionPapers()
       .pipe(
        catchError((err:string) =>  of(err))
        );
        }

}