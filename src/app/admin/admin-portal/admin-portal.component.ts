import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, NavigationStart, NavigationEnd,NavigationCancel,NavigationError, Event } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent {
  showLoadingIndicator = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );



  viewDashboard(): void {

    this._router.navigateByUrl('admin-portal/admin-dashboard');
  }


  constructor(private breakpointObserver: BreakpointObserver, public _router: Router, public _location: Location) 
  {
    this._router.events.subscribe((routerEvent: Event) => {
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
