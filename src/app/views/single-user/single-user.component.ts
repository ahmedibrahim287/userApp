import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

user:Users={}
  constructor(private service:UsersService, private router:ActivatedRoute) { }
  id:string=this.router.snapshot.params['id']
  getSingleUser() {
    this.service.getSingleUsers(this.id).subscribe({
      next: (res: any) => {
        this.user=res
      },
        error: (httpError: any) => {
        console.log(httpError)
      }
    })
  }
  ngOnInit(): void {
    this.getSingleUser()
  }

}
