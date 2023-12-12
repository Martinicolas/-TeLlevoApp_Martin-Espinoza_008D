import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AutorizadoGuard {
  constructor(private router: Router,
    private authservice: AuthService,
    private toastcontroller: ToastController) { }


  canActivate():

    | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authservice.IsLogged()) {
      this.showToast('Debe iniciar sesión');
      this.router.navigateByUrl("/login");
      return false;
    }
    return true;
  }

  async showToast(msg: any) {
    const toast = await this.toastcontroller.create({
      message: msg,
      duration: 3000
    })
    toast.present();
  }
}