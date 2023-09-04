import { Component } from '@angular/core';
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
  ]
  constructor() { }
}
