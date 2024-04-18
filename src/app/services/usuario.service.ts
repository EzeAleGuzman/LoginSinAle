import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>('http://luminabank.somee.com/api/login', { username, password });
  }

  recuperar(username: string): Observable<any>{
    return this.http.post<any>('http://127.0.0.1:8000/recuperar/', { username });
  }


}