import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';



@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [CommonModule, IonicModule],
  exports: [AuthLayoutComponent]
})
export class ComponetsModule { }
