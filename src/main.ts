import {bootstrapApplication} from '@angular/platform-browser';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {AppComponent} from './app/app.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideRouter} from '@angular/router';
import {routes} from './app/app.routes';
import {authInterceptor} from './app/interceptors/auth.interceptor';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimationsAsync()],
}).catch((err) => console.error(err));
