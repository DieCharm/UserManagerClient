import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public client: HttpClient) { }

  allUsers(): Observable<User[]> {
    return this.client.get<User[]>(
      `${environment.recourseLink}`);
  }

  create(model: User): Observable<any> {
    return this.client.post(
      `${environment.recourseLink}`, model);
  }

  getById(id: number): Observable<User> {
    return this.client.get<User>(
      `${environment.recourseLink}/${id}`);
  }

  update(model: User): Observable<any> {
    return this.client.put(
      `${environment.recourseLink}`, model);
  }

  delete(id: number): Observable<any> {
    return this.client.delete(
      `${environment.recourseLink}/${id}`);
  }
}

