import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SloginComponent } from './slogin/slogin.component';
import { SmotDePasseOublierComponent } from './smot-de-passe-oublier/smot-de-passe-oublier.component';

@NgModule({
  declarations: [
    AppComponent,
    SloginComponent,
    SmotDePasseOublierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
