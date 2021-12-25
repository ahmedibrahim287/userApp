import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleUserComponent } from './views/single-user/single-user.component';
import { TempletFormComponent } from './views/templet-form/templet-form.component';
import { UsersComponent } from './views/users/users.component';


const routes: Routes = [
  {path:'',component:TempletFormComponent},
  {path:'users',component:UsersComponent},
  {path:'single-user/:id',component:SingleUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
  

export class AppRoutingModule { }
