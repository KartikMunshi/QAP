import { ComponentPortal } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankDetailsComponent } from './components/bank-details/bank-details.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserDetailsFormComponent } from './components/user-details-form/user-details-form.component';
import { UserSelectionComponent } from './components/user-selection/user-selection.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo : 'login'
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'signup',
    component: SignupComponent
  },
  {
    path:'Choose-User',
    component: UserSelectionComponent
  },
  {
    path:'bank-details',
    component: BankDetailsComponent
  },
  {
    path:'user-details-form',
    component: UserDetailsFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
