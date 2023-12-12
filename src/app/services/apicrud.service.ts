import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iusuario, Iusuarios } from '../pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApicrudService {

  constructor(private httpclient: HttpClient) { }
  listarUsuario(): Observable<Iusuarios> {
    return this.httpclient.get<Iusuarios>(`${environment.apiUrl}/usuario`);
  }
  CrearRegistro(newRegistro: Iusuario): Observable<Iusuario> {
    return this.httpclient.post<Iusuario>(`${environment.apiUrl}/usuario`, newRegistro);
  }
  actualizarUsuario(datosUsuario: Iusuario): Observable<any> {
    const id = datosUsuario.nombre; // Asegúrate de tener el ID del usuario
    return this.httpclient.put(`${environment.apiUrl}/usuario/${id}`, datosUsuario);
  }

}
