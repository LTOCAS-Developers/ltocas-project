import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-portal',
  templateUrl: './client-portal.component.html',
  styleUrls: ['./client-portal.component.css']
})
export class ClientPortalComponent {

  title = 'AngularMaterialGettingStarted';

  viewDashboard(): void{

    this._router.navigateByUrl('client-portal/client-dashboard');
  }
  createBatch(){
    this._router.navigateByUrl('client-portal/create-batch');

  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
     /** Based on the screen size, switch from standard to one column per row */
   
  constructor(private breakpointObserver: BreakpointObserver,public _router:Router) {}
}
