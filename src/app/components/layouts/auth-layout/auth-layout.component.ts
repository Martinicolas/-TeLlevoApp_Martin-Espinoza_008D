import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
})
export class AuthLayoutComponent implements OnInit {
  @Input() title: string = '';
  @Input() footerText: string = '';
  @Input() linkFooterText: string = '';
  @Input() destiny: string = '';

  constructor(private router: Router) { }

  ngOnInit() { }

  navigateTo(): void {
    this.router.navigate([this.destiny]);
  }

}
