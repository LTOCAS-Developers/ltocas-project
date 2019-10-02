import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { map,catchError } from 'rxjs/operators';


@Injectable()
export class ClientDetailsGuardService implements CanActivate{
   constructor(private service:ServiceService,
    private _router:Router){

   }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
     return this.service.getClient(+route.paramMap.get('id')).pipe(
         map(client =>{
             const clientExists = !!client;
             if(clientExists){
                return true;
                    }
                    else {
                        this._router.navigate(['notFound']);
                        return false;
                        
                    }
         }),
         catchError((err) => {
            console.log(err);
            return of(false);
         })
     );
   
    }
  


}