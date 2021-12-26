import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Users[] = []
  
  constructor(private service:UsersService) { }

// get all
  getUsers() {
    this.service.getUsers().subscribe({
      next: (res: any) => {
        this.users=res
    },
        error: (httpError: any) => {
        console.log(httpError)
      }
  })
}

  
  onSubmit(x: any) {
    this.service.addUser(x).subscribe({
      next: () => {
      this.users.splice(0,0,x)  
        // console.log(x)
      }
    })
  }


  deleteUser(user:any,i:number) {
    this.service.deleteUser(user).subscribe({
      next: () => {
        this.users.splice(i,1)  
      }
    })
  }
  
 
  ngOnInit(): void {
    this.getUsers()
  }

}
