import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage implements OnInit {

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

}
