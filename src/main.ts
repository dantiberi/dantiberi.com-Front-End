import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

window.screen.orientation.lock("portrait");

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
