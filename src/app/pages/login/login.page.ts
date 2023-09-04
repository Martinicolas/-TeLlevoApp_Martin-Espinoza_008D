import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private menuCtrl: MenuController,
    private menuController: MenuController,
    private navCtrl: NavController) { }

  ngOnInit() {
  }
  closeSideMenu(): void {
    this.menuCtrl.close();
  }
  mostrarMenu() {
    this.menuController.open('first');
  }
}
