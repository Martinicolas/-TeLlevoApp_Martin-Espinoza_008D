import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  constructor(
    private menuCtrl: MenuController,
    private menuController: MenuController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  closeSideMenu(): void {
    this.menuCtrl.close();
  }
  mostrarMenu() {
    this.menuController.open('first');
  }
  redirigirAPagina() {

    this.navCtrl.navigateForward('/login');
  }
  redirigirAPaginar() {

    this.navCtrl.navigateForward('/registro');
  }

}
