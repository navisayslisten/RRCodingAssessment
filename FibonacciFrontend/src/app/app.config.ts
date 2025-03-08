import {HttpClientModule} from '@angular/common/http';
import {importProvidersFrom} from '@angular/core';
import {ApplicationConfig} from "@angular/platform-browser";

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
  ]
};
