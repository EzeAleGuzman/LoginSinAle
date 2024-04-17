import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }

  

  registro(username: string, password: string, email: string): Observable<any> {
    return this.http.post<any>('https://0.0.0.0:7024/api/Registration', { username, password, email });
  }
}
