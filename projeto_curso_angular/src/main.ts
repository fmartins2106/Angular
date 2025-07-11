import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ✅ Ativa o JS do Bootstrap
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
