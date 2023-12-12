import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { ApicrudService } from 'src/app/services/apicrud.service';
import { Iusuario } from '../interfaces/interfaces';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  newRegistro: Iusuario = {
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
    sede: "",
    isactive: true
  }
  constructor(private navCtrl: NavController,
    private apiCrud: ApicrudService,
    private router: Router) { }

  ngOnInit() {
  }

  crearRegistro() {
    this.apiCrud.CrearRegistro(this.newRegistro).subscribe();
    this.router.navigateByUrl("/login");
  }

  redirigirAPagina() {

    this.navCtrl.navigateForward('/login');
  }
  redirigirARegistro2() {

    this.navCtrl.navigateForward('/login');
  }

}
