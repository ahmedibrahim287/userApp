import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  url="https://jsonplaceholder.typicode.com/users/"
  constructor(private http:HttpClient) { }
 
  getUsers() {
    return this.http.get<Users[]>(this.url)
  }
  getSingleUsers(id:string) {
    return this.http.get(this.url +id)
  }


  addUser(user: Users) {
        return this.http.post(this.url,user)
  }

  deleteUser(id:string) {
          return this.http.delete(this.url+id)
  }
  
  editUser(id:string,body:Users) {
    return this.http.patch(this.url+id,body)
  }

}
