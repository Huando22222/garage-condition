import { Component, Input, input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { GoogleLoginComponent } from '../../google-login/google-login.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    AsyncPipe,
    GoogleSigninButtonModule,
    CommonModule,
    GoogleLoginComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  goToNearGarage() {
    this.router.navigateByUrl('/Near_Garage');
  }

  goToHome() {
    this.router.navigateByUrl('/');
  }
  goToEventPage() {
    this.router.navigateByUrl('/event');
  }

  goToNewEventPage() {
    this.router.navigateByUrl('/new-event');
  }
}

