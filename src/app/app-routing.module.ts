import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdituserComponent } from './views/edituser/edituser.component';
import { SingleUserComponent } from './views/single-user/single-user.component';
import { UsersComponent } from './views/users/users.component';


const routes: Routes = [
  {path:'',component:UsersComponent},
  {path:'single-user/:id',component:SingleUserComponent},
  {path:'edit-user/:id',component:EdituserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
  

export class AppRoutingModule { }
