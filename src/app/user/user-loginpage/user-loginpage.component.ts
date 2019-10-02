import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-loginpage',
  templateUrl: './user-loginpage.component.html',
  styleUrls: ['./user-loginpage.component.css']
})
export class UserLoginpageComponent implements OnInit {
   
  userLoginForm:FormGroup;
  submitted = false;

  constructor(private router: Router,private fb:FormBuilder) { }

  ngOnInit() {
    this.userLoginForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['',Validators.required]
    });
  }
  get l() { return this.userLoginForm.controls; }

  login(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.userLoginForm.invalid) {
        return;
    }
    this.router.navigate(['/user-portal'])
  }
}
