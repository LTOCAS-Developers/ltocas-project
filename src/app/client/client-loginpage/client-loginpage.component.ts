import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-loginpage',
  templateUrl: './client-loginpage.component.html',
  styleUrls: ['./client-loginpage.component.css']
})
export class ClientLoginpageComponent implements OnInit {
  
  clientLoginForm:FormGroup;
  submitted = false;

  constructor(private router: Router,private fb:FormBuilder) { }

  ngOnInit() {
    this.clientLoginForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['',Validators.required]
    });
  }
  get l() { return this.clientLoginForm.controls; }

  login(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.clientLoginForm.invalid) {
        return;
    }
    this.router.navigate(['/client-portal'])
  }
}
