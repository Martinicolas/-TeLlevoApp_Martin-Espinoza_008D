import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private authService: AuthService, private menuController: MenuController, private router: Router, private alertController: AlertController) { }
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  sede: string = '';
  ngOnInit() {
    this.nombre = sessionStorage.getItem('nombre') as string;
    this.apellido = sessionStorage.getItem('apellido') as string;
    this.correo = sessionStorage.getItem('correo') as string;
    this.sede = sessionStorage.getItem('sede') as string;
  }
  mostrarMenu() {
    this.menuController.open('first');
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/inicio");
  }
  async confirmLogout() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Estás seguro de que quieres cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // Aquí puedes hacer algo si el usuario presiona "Cancelar", o simplemente dejarlo vacío
          }
        },
        {
          text: 'Sí, cerrar sesión',
          handler: () => {
            this.logout();
          }
        }
      ]
    });

    await alert.present();
  }
  edit() {
    this.router.navigateByUrl("/editar")
  }

}
