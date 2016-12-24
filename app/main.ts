import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { getTranslationProviders } from './i18n-providers';

import { AppModule } from './app.module';


const platform = platformBrowserDynamic();

getTranslationProviders().then(providers => {
    platform.bootstrapModule(AppModule, { providers });
});
