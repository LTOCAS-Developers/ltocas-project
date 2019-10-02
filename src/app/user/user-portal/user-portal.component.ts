import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-portal',
  templateUrl: './user-portal.component.html',
  styleUrls: ['./user-portal.component.css']
})
export class UserPortalComponent {

  viewDashboard(): void{

    this._router.navigateByUrl('user-portal/user-dashboard');
  }
  title = 'AngularMaterialGettingStarted';

  isMenuOpen = true;
  contentMargin = 240;

  
 



  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
     /** Based on the screen size, switch from standard to one column per row */
  

  constructor(private breakpointObserver: BreakpointObserver,public _router:Router) {}
}
