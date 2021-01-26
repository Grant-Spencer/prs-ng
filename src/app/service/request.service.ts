import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '../model/request.class';

const URL = 'http://localhost:8080/requests';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  // service functions
  // getAll requests
  getAll(): Observable<Request[]> {
    return this.http.get(URL + '/') as Observable<Request[]>;
  }

  // getByID
  getById(id): Observable<Request> {
    return this.http.get(URL + '/' + id) as Observable<Request>;
  }

  //create request
  create(request: Request): Observable<Request> {
    return this.http.post(URL + '/', request) as Observable<Request>;
  }
  //update request
  update(request: Request): Observable<Request> {
    return this.http.put(URL + '/', request) as Observable<Request>;
  }
  //delete a request
  delete(id): Observable<Request> {
    return this.http.delete(URL + '/'+id) as Observable<Request>;
  }
  // login
  login(u: Request): Observable<Request>{
    return this.http.post(URL +'/login', u ) as Observable<Request>;
  }

}