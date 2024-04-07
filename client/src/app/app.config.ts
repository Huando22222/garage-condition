import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';

// import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

// const config: SocketIoConfig = {
//   url: 'http://localhost:3000', // socket server url;
//   options: {},
// };

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    provideStore(),
    // importProvidersFrom(
    //   // BrowserAnimationsModule,
    //   SocketIoModule.forRoot(config)
    // ),
  ],
};
