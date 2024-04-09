import { ApplicationConfig ,importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';


import { provideStore, provideState } from '@ngrx/store';
import { ticketReducer } from './store/reducers/campus-ab.reducer';
import { reducers, metaReducers } from './store/reducers';
import { GoogleLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    importProvidersFrom(HttpClientModule),
    provideStore(reducers, { metaReducers }),
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1009297337815-hm1b76lbccc13mse68l0f77quqp1513r.apps.googleusercontent.com',
              {
                oneTapEnabled: false,
                prompt: 'consent',
              }
            ),
          },
        ],
        onError: (err) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
    // provideStore(),
    // provideState({ name: 'ticket', reducer: ticketReducer }),
  ],
};
