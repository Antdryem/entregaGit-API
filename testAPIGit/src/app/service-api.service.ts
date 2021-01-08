import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceAPIService {

  constructor(private http: HttpClient) { }

  consumeService(url){
    return this.http.get<any>(url);
  }
}
