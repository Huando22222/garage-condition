import { CommonModule } from '@angular/common';
import { Component, inject, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleSigninButtonModule, SocialAuthService } from '@abacritt/angularx-social-login';
import { Store } from '@ngrx/store';
import { googleLogged, logout } from '../../store/actions/auth-google.action';
import { User } from '../../interface/user-google.model';
@Component({
  selector: 'app-google-login',
  standalone: true,
  imports: [CommonModule, GoogleSigninButtonModule],
  templateUrl: './google-login.component.html',
  styleUrl: './google-login.component.scss',
})
export class GoogleLoginComponent {
  private store = inject(Store);
  user$: Observable<User> | undefined;

  socialAuthService = inject(SocialAuthService);

  constructor( private zone: NgZone) {}

  ngOnInit() {
    // this.isLoggedIn$ = this.authService.isLoggedIn;
    this.socialAuthService.authState.subscribe({
      next: (result) => {
        console.log(result);
        const user: User = {
          _id: result.id,
          email: result.email,
          firstName: result.firstName,
          id: result.id,
          lastName: result.lastName,
          name: result.name,
          photoUrl: result.photoUrl,
          isAdmin: false, 
        };
        this.zone.run(() => {
          this.store.dispatch(googleLogged({ User: user }));
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  loginOrLogout() {
    // if (this.isLoggedIn$) {
    //   // this.authService.logout();
    // } else {
    //   // Thực hiện login
    //   // this.authService.login();
    // }
  }
}
