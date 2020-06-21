import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragover", function(event) {
  console.log('===Doc dragover.');
  // console.log('====>Target: ' + event.target.);
  event.preventDefault();
}, false);