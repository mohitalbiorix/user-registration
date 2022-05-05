import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private userSvc : UserService,
    private snackBar: MatSnackBar
  ) { }

  registrationForm!: FormGroup;


  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.registrationForm = this.fb.group({
      firstName : ['' , [Validators.required,Validators.maxLength(25),Validators.pattern("^[a-zA-Z]*$")]],
      lastName :['', [Validators.required,Validators.maxLength(25),Validators.pattern("^[a-zA-Z]*$")]],
      emailAddress :['',[Validators.required , Validators.email , Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password :['',[Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/)]]
    })
  }

    openSnackBar(message="Registration Successful", action = '') {
        this.snackBar.open(message, action, {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition:'right',
      });
      setTimeout(()=>{   
          window.location.reload();
    },3000);
    }

  submitForm(userData: any){
    this.registrationForm.markAllAsTouched();
    const data = this.userSvc.getUser();
    console.log(data);
    if(this.registrationForm.invalid){
      return;
    }
    this.userSvc.addUser(userData);
    this.openSnackBar(); 
  }
}
