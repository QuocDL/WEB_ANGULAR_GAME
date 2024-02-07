import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URI = 'http://localhost:3000'
  constructor(
    private http: HttpClient
  ) { }


  loginService(data: User):Observable<User>{
    return this.http.post<User>(`${this.URI}/login`, data)
  }

  registerServices(data: User):Observable<User>{
    return this.http.post<User>(`${this.URI}/register`, data)
  }
}
