import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
  {
    path :'user',
    component:UserRegistrationComponent
  },
  {
    path :'',
    redirectTo:'user',
    pathMatch:'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
