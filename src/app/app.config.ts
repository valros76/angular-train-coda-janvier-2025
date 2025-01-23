import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeFr from "@angular/common/locales/fr";

import { routes } from './app.routes';

registerLocaleData(localeFr, "fr");

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      useValue: "fr"
    }
  ]
};
