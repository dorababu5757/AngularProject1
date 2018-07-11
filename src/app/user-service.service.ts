import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  private userUrl='https://jsonplaceholder.typicode.com/users';
  public getUsers(){
    return this.http.get<User[]>(this.userUrl);  
    
  }
}
