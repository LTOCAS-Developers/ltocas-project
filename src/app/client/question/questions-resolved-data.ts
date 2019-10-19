import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Question } from 'src/app/models.ts/question';
import { Observable,of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ServiceService } from 'src/app/service.service';

  
@Injectable()
export class QuestionsDataResolverService implements Resolve<Question[] | string>{
   
    constructor(private service:ServiceService){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Question[] | string> {
          return this.service.getQuestions().pipe(
        catchError((err:string) =>  of(err))
        );
        }
}
