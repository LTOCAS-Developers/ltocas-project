import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Observable,of } from 'rxjs';
import { Injectable } from '@angular/core';
import {  catchError } from 'rxjs/operators';

import { ServiceService } from 'src/app/service.service';
import { Batches } from './batch';

@Injectable()
export class BatchDataResolverService implements Resolve<Batches[] | string>{
    constructor(private service:ServiceService){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Batches[] | string> {

          return this.service.getBatches()
       .pipe(
        catchError((err:string) =>  of(err))
        );
        console.log(this.service.getBatches())

        }

}