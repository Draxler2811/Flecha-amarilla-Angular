import { Routes } from '@angular/router';
import { FirtsComponent } from './components/firts/firts/firts.component';
import { NotfoundComponent } from './components/notfound/notfound/notfound.component';
import { AppComponent } from './app.component';
import { guardiaSesionGuard } from './guard/guardia-sesion.guard';


export const routes: Routes = [  { path: 'first-component', component: FirtsComponent,
 canActivate:[guardiaSesionGuard]}
,{ path: 'error', component: NotfoundComponent,canActivate:[guardiaSesionGuard]}];