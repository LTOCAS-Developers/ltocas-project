import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {FormBuilder,Validators} from '@angular/forms';
import { MustMatch } from './shared/password.validators';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-user-registrationpage',
  templateUrl: './user-registrationpage.component.html', 
  styleUrls: ['./user-registrationpage.component.css']
})
export class UserRegistrationpageComponent implements OnInit {


  constructor(private fb:FormBuilder,private service:ServiceService) { }
  registrationForm:FormGroup;
  submitted = false;
  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['', [Validators.required, Validators.email]],
      mobileNumber:['',[Validators.required,Validators.minLength(10)]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',[Validators.required]]
    },{
      validator: MustMatch('password', 'confirmPassword')
    });
    
  }
  get f() { return this.registrationForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registrationForm.invalid) {
        return;
    }
    else{
      console.log(this.registrationForm.value)
      this.service.register(this.registrationForm.value)
      .subscribe(
        response => alert('SUCCESS!! :-)\n\n'+response),
        error => alert('Registration Failed!'+error)
      );   
    }

}

}
