import { Component, OnInit } from '@angular/core';
import { ApicrudService } from 'src/app/services/apicrud.service';
import { Iusuario } from '../interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  password: string = '';
  sede: string = '';
  isactive: boolean = true;

  constructor(private apicrudService: ApicrudService, private router: Router) { }

  ngOnInit() {
    this.nombre = sessionStorage.getItem('nombre') || '';
    this.apellido = sessionStorage.getItem('apellido') || '';
    this.correo = sessionStorage.getItem('correo') || '';
    this.sede = sessionStorage.getItem('sede') || '';
    // No cargues la contraseña por razones de seguridad
  }

  actualizarUsuario() {
    const datosActualizados: Iusuario = {
      nombre: this.nombre,
      apellido: this.apellido,
      correo: this.correo, // Incluye esta propiedad
      password: this.password, // Incluye esta propiedad
      sede: this.sede, // Incluye esta propiedad
      isactive: this.isactive // Incluye esta propiedad
    };
    this.apicrudService.actualizarUsuario(datosActualizados).subscribe(
      response => {
        console.log('Usuario actualizado', response);
        // Actualiza sessionStorage aquí
        sessionStorage.setItem('nombre', this.nombre);
        sessionStorage.setItem('apellido', this.apellido);
        sessionStorage.setItem('correo', this.correo);
        sessionStorage.setItem('sede', this.sede);
        // Redirige al perfil
        this.router.navigateByUrl("/perfil");
      },
      error => {
        console.error('Error al actualizar el usuario', error);
      }
    );
    this.router.navigateByUrl("/perfil");

  }

}
