import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingComponent} from './pages/landing/landing.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {NotificationContainerComponent} from './shared/components/notification-container/notification-container.component';
import {MainSearchComponent} from './shared/components/main-search/main-search.component';
import {AmDropdownComponent} from './shared/components/am-dropdown/am-dropdown.component';
import {AmSliderComponent} from './shared/components/am-slider/am-slider.component';
import { AmSliderTimeoutComponent } from './shared/components/am-slider-timeout/am-slider-timeout.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    NotificationContainerComponent,
    MainSearchComponent,
    AmDropdownComponent,
    AmSliderComponent,
    AmSliderTimeoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient): any {
  return new TranslateHttpLoader(http);
}
