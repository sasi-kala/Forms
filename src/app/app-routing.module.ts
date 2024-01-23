import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OpenComponent } from './open/open.component';



const routes: Routes = [
 {path:'login', component: LoginComponent},
 {path:'register', component: RegisterComponent},
 {path:'', component: OpenComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
