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

  ngOnInit(): void {
    this.getUsers()
  }

}
