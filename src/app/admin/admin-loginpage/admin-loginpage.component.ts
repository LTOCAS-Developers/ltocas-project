import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-admin-loginpage',
  templateUrl: './admin-loginpage.component.html',
  styleUrls: ['./admin-loginpage.component.css']
})
export class AdminLoginpageComponent implements OnInit {
  adminLoginForm:FormGroup;
  submitted = false;

  
  constructor(private router: Router,private fb:FormBuilder) { }

  ngOnInit() {
    this.adminLoginForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['',Validators.required]
    });
  }
  get l() { return this.adminLoginForm.controls; }
 
  login(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.adminLoginForm.invalid) {
        return;
    }
    this.router.navigate(['/admin-portal'])
  }
}
