import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http : HttpClient
  ) { }

  getUserList() : Observable<any> {
    let url = "https://jsonplaceholder.typicode.com/users/"
    return this.http.get(url, {})
  }

}
