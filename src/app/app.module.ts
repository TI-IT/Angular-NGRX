import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {EffectsModule} from '@ngrx/effects'
import {DefaultDataServiceConfig, EntityDataModule, EntityDataService} from '@ngrx/data'
import {HttpClientModule} from '@angular/common/http'
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component'
import {CommonModule} from '@angular/common'

// const defaultDataServiceConfig: DefaultDataServiceConfig = {
//   root: 'http://localhost:3001/products',
// }
// { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Demo tiit App',
      // In a production build you would want to disable the Store Devtools
      // logOnly: !isDevMode(),
    }),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({}),
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {

  }
}
