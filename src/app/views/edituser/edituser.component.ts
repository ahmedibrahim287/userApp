import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
user:Users={}

  constructor(private service: UsersService,private route: ActivatedRoute,private router: Router) { }
  id: string = this.route.snapshot.params['id']
  
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
  
  
  editUser(user:Users) {
    this.service.editUser(this.id, user).subscribe({
      next: () => {
        this.router.navigateByUrl('')

      }
  })

  }
  ngOnInit(): void {
        this.getSingleUser()

  }

}
