import {bootstrapApplication} from '@angular/platform-browser';
import {provideHttpClient} from '@angular/common/http';
import {DashboardComponent} from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(DashboardComponent, {
  providers: [provideHttpClient(), provideAnimationsAsync()],
}).catch((err) => console.error(err));
