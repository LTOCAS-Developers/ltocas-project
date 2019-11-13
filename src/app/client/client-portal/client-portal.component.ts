import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError,Event } from '@angular/router';
import { Location } from '@angular/common';

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
   private showLoadingIndicator:boolean;
  constructor(private breakpointObserver: BreakpointObserver,public _router:Router,
    public _location: Location) {
      this._router.events.subscribe((routerEvent:Event)=>
      {
        if (routerEvent instanceof NavigationStart) {
          this.showLoadingIndicator = true;
        }
        if (routerEvent instanceof NavigationEnd ||
          routerEvent instanceof NavigationCancel || 
          routerEvent instanceof NavigationError) {
          this.showLoadingIndicator = false;
        }
      });
    }
      
      

   
}
