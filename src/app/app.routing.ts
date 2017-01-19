import { RouterModule, Routes } from '@angular/router';

import {Dashboard} from './components/dashboard/dashboard';
import {Tables} from './components/tables/tables';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard'


const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: Dashboard, canActivate:[AuthGuard]},
  {path: 'tables', component: Tables, canActivate:[AuthGuard]},
  {path:'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' }

];

export const routing = RouterModule.forRoot(APP_ROUTES);
