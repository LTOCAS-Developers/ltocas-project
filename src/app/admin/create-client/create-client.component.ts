import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { MustMatch } from 'src/app/shared/password.validators';
import { ActivatedRoute, Router } from '@angular/router';
import { Clients } from '../../models.ts/models';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private service: ServiceService,
    private _route: ActivatedRoute,
    private _router: Router) { }
  clientForm: FormGroup;
  submitted = false;
  panelTitle: string;  
  demo: Clients;
  newClientid: number;

  ngOnInit() {    

    this.clientForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.minLength(10)]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      cpass: ['', [Validators.required]],
      id:[0],
      sno:[0],
      userTypePojo: this.fb.group({
        id: [0],
        userType: ""
      }),
      clientPojo: this.fb.group({
        id: [0],
        companyName: ""
      })
    });


    this._route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.newClientid = id;
      if (id === 0) {
        this.newClient();
        console.log(id)
      }
      else {
        this.getClient(id);
      }
    })


  }

  getClient(id: number) {
    this.service.getClient(id).subscribe(
      (client: Clients) => this.editclient(client),
      (err: any) => console.log(err)
    );
  }
  editclient(client: Clients) {
    this.panelTitle = "Edit Client";
    this.clientForm.patchValue({
      firstName: client.firstName,
      lastName: client.lastName,
      email: client.email,
      mobileNumber: client.mobileNumber,
      pass: client.pass,
      cpass: client.cpass,
      id: client.sno,
      userTypePojo:{
        id: client.userTypePojo.id,
        userType: client.userTypePojo.userType
      },
      clientPojo:{
        id: client.clientPojo.id,
        companyName:client.clientPojo.companyName

      }
    });
  }
  private newClient() {
    {
      this.submitted = false;
      this.clientForm.reset();
      this.clientForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        mobileNumber: ['', [Validators.required, Validators.minLength(10)]],
        pass: ['', [Validators.required, Validators.minLength(6)]],
        cpass: ['', [Validators.required]],
        userTypePojo: this.fb.group({
          id: [0],
          userType: ""
        }),
        clientPojo: this.fb.group({
          id: [0],
          companyName: ""
        }
         ) }, {
        validator: MustMatch('pass', 'cpass')
      });
      this.panelTitle = "Create Client";
    }
  }
  get f() { return this.clientForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.clientForm.invalid) {
      return;
    }
    else {
      if (this.newClientid === 0) {

        this.service.clientRegister(this.clientForm.value).subscribe(
          (data: Clients) => {
            console.log(data)
            this._router.navigate(["admin-portal/list-client"]);

          },
          error => alert('Registration Failed!' + error)
        );
      }
      else {
        this.clientForm.value.id = this.newClientid;
        console.log(this.clientForm.value);
        this.service.updateEmployee(this.clientForm.value).subscribe(
          () => {
            console.log(this.clientForm.value);
            this._router.navigate(['admin-portal/list-client']);
          },
          (error: any) => console.log(error)
        );
      }
    }


  }
}
