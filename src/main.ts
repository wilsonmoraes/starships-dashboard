import {bootstrapApplication} from '@angular/platform-browser';
import {provideHttpClient} from '@angular/common/http';
import {DashboardComponent} from './app/app.component';

bootstrapApplication(DashboardComponent, {
  providers: [provideHttpClient()],
}).catch((err) => console.error(err));
