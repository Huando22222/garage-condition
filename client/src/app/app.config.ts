import { ApplicationConfig ,importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';


import { provideStore, provideState } from '@ngrx/store';
import { ticketReducer } from './store/reducers/campus-ab.reducer';
import { reducers, metaReducers } from './store/reducers';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    importProvidersFrom(HttpClientModule),
    provideStore(reducers, {metaReducers}),
    // provideStore(),
    // provideState({ name: 'ticket', reducer: ticketReducer }),
  ],
};
