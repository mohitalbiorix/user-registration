import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private userSvc : UserService,
    private snackBar: MatSnackBar
  ) { }

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.loginForm = this.fb.group({
      emailAddress :['',[Validators.required , Validators.email , Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password :['',[Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/)]]
    })
  }


    openSnackBar(message :string, action = '') {
        this.snackBar.open(message, action, {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition:'right',
      });
      setTimeout(()=>{   
          window.location.reload();
    },3000);
    }
  

  submitLoginData(data : any){
    debugger
    const userLogindata = this.userSvc.getUser();
    console.log(userLogindata);
    this.loginForm.markAllAsTouched();
    if(this.loginForm.invalid){
      return;
    }
    for (let i = 0; i < userLogindata.length; i++){
      if(userLogindata[i].emailAddress == data.emailAddress && userLogindata[i].password == data.password){
        this.openSnackBar('Login Successfully')
        break;
      }
      else{
        this.openSnackBar('Login failed')
      }
    }
  }



}
