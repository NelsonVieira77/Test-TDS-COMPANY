import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { DallolComponent } from './dallol/dallol.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatIconModule} from '@angular/material/icon';
import { FairbanksComponent } from './fairbanks/fairbanks.component';
import { LondonComponent } from './london/london.component';
import { RecifeComponent } from './recife/recife.component';
import { VancouverComponent } from './vancouver/vancouver.component';
import { YakutskComponent } from './yakutsk/yakutsk.component';
import { ButtonBackComponent } from './button-back/button-back.component';
@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    DallolComponent,
    FairbanksComponent,
    LondonComponent,
    RecifeComponent,
    VancouverComponent,
    YakutskComponent,
    ButtonBackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
