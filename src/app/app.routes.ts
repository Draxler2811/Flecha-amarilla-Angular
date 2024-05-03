import { Routes } from '@angular/router';
import { FirtsComponent } from './components/firts/firts/firts.component';
import { NotfoundComponent } from './components/notfound/notfound/notfound.component';
import { AppComponent } from './app.component';
export const routes: Routes = [  { path: 'first-component', component: FirtsComponent }
,{ path: 'error', component: NotfoundComponent }];