import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface Componente {
  name: string;
  icon: string;
  redirecTo: string;
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  user = sessionStorage.getItem('nombre');

  componentes: Componente[] = [
    {
      name: 'Inicio',
      redirecTo: '/inicio',
      icon: 'home'
    },
    {
      name: 'Login',
      redirecTo: '/login',
      icon: 'log-in'
    },
    {
      name: 'Registro',
      redirecTo: '/registro',
      icon: 'people'
    },
    {
      name: 'Nosotros',
      redirecTo: '/nosotros',
      icon: 'car-sport-sharp'
    },
    {
      name: 'Perfil',
      redirecTo: '/perfil',
      icon: 'person-circle'
    },
  ]
  componenteLogged: Componente[] = [
    {
      name: 'Perfil',
      redirecTo: '/perfil',
      icon: 'person-circle'
    },
    {
      name: 'Nosotros',
      redirecTo: '/nosotros',
      icon: 'car-sport-sharp'
    },

  ]
  ngOnInit() {
    this.user = sessionStorage.getItem('nombre');
    if (this.user) {
      // Si el usuario ha iniciado sesión, redirigir a una página específica
      this.router.navigate(['/perfil']);
    } else {
      // Si el usuario no ha iniciado sesión, redirigir a otra página
      this.router.navigate(['/inicio']);
    }
  }
  constructor(private router: Router) { }
}
