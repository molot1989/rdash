import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { Alerts } from './components/alerts/alerts'
import { Dashboard } from './components/dashboard/dashboard';
import { Tables } from './components/tables/tables';
import { RdLoading } from './components/rd-loading/rd-loading'
import { RdWidget } from './components/rd-widget/rd-widget'
import { RdWidgetBody } from './components/rd-widget-body/rd-widget-body'
import { RdWidgetFooter } from './components/rd-widget-footer/rd-widget-footer'
import { RdWidgetHeader } from './components/rd-widget-header/rd-widget-header'
import { ServerListView } from './components/server-list-view/server-list-view'
import { UserListView } from './components/user-list-view/user-list-view'
import {UserListService} from './services/user-list.service';
import {ServerListService} from './services/server-list.service';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationService} from './services/authentication.service';
import {AuthGuard} from './auth.guard'


@NgModule({
  declarations: [
    AppComponent,
    Dashboard,
    Tables,
    Alerts,
    RdLoading,RdWidget,RdWidgetBody,RdWidgetFooter,RdWidgetHeader,ServerListView,UserListView, LoginComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    UserListService,
    ServerListService,
    AuthenticationService,
    AuthGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
