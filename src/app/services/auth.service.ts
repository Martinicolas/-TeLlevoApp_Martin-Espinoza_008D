import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient: HttpClient) { }

  //obtenemos un observable con todos los usuarios almacenados
  GetAllUsers(): Observable<Users> {
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuario`);
  }

  //obtenemos un observable con la información que se busca a través de username
  GetUserById(codigo: any): Observable<Users> {
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuario/?nombre=${codigo}`);
  }

  IsLogged() {
    return sessionStorage.getItem('nombre') != null;
  }

  logout() {
    sessionStorage.removeItem('nombre');
    sessionStorage.removeItem('ingresado');
  }

}
