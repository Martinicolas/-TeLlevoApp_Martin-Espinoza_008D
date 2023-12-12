import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userdata: any;

  usuario = {
    id: 0,
    nombre: "",
    apellido: "",
    correo: "",
    sede: "",
    password: "",
    isactive: true
  }

  loginForm: FormGroup;

  constructor(private authservice: AuthService,
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController,
    private builder: FormBuilder) {
    this.loginForm = this.builder.group({
      'username': new FormControl("", [Validators.required, Validators.minLength(4)]),
      'password': new FormControl("", [Validators.required, Validators.minLength(4)])
    })
  }

  ngOnInit() {
  }

  login() {
    if (this.loginForm.valid) {
      this.authservice.GetUserById(this.loginForm.value.username).subscribe(resp => {
        this.userdata = resp;
        console.log(this.userdata)
        if (this.userdata.length > 0) {
          this.usuario = {
            id: this.userdata[0].id,
            nombre: this.userdata[0].nombre,
            apellido: this.userdata[0].apellido,
            correo: this.userdata[0].correo,
            sede: this.userdata[0].sede,
            password: this.userdata[0].password,
            isactive: this.userdata[0].isactive
          }
          console.log(resp);
          console.log(this.usuario.password);
          if (this.usuario.password === this.loginForm.value.password) {
            if (this.usuario.isactive) {
              sessionStorage.setItem('nombre', this.usuario.nombre);
              sessionStorage.setItem('apellido', this.usuario.apellido)
              sessionStorage.setItem('correo', this.usuario.correo)
              sessionStorage.setItem('sede', this.usuario.sede)
              sessionStorage.setItem('ingresado', 'true');

              this.showToast('Sesión Iniciada');
              this.router.navigateByUrl("/perfil");
            }
            else {
              this.userInactivo();
              console.log("Usuario inactivo.");
            }
          }
          else {
            this.Error();
            console.log("error en credenciales");
          }
        }
        else {
          this.NoExiste();
          this.loginForm.reset();
        }

      })

    }

  }//fin login
  async showToast(msg: any) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    })
    toast.present();
  }
  async userInactivo() {
    const alerta = await this.alertController.create({
      header: 'Error..',
      message: 'Usuario inactivo, contactar a admin@admin.cl',
      buttons: ['Ok']
    });
    alerta.present();
    return;
  }
  async Error() {
    const alerta = await this.alertController.create({
      header: 'Error..',
      message: 'Revise sus credenciales',
      buttons: ['Ok']
    });
    alerta.present();
    return;
  }
  async NoExiste() {
    const alerta = await this.alertController.create({
      header: 'Debe registrarse..',
      message: 'Usuario no existe',
      buttons: ['Ok']
    });
    alerta.present();
    return;
  }



}