import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './views/users/users.component';
import { SingleUserComponent } from './views/single-user/single-user.component';
import { UsersService } from './services/users.service';
import { FormsModule } from '@angular/forms';
import { EdituserComponent } from './views/edituser/edituser.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SingleUserComponent,
    EdituserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UsersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
