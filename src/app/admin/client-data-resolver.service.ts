import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Clients } from './models.ts/models';
import { Observable,of } from 'rxjs';
import { ServiceService } from '../service.service';
import { Injectable } from '@angular/core';
import {  catchError } from 'rxjs/operators';

@Injectable()
export class ClientDataResolverService implements Resolve<Clients[] | string>{
    constructor(private service:ServiceService){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Clients[] | string> {
          return this.service.getClients()
       .pipe(
        catchError((err:string) =>  of(err))
        );
        }

}