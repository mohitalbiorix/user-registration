import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationRoutingModule } from './registration-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    UserRegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    RegistrationRoutingModule,
    MatSnackBarModule,
    MatIconModule
  ],
})
export class RegistrationModule { }
