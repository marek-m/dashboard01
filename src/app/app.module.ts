import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {PanelComponent} from './components/panel/panel.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardCardComponent,
    PanelComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
