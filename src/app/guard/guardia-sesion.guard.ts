import { Injectable, inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';


@Injectable({providedIn: 'root'})
class PermissionService{
  puedeActivarLaRuta(rutaIngresada: string):boolean{
    console.log(rutaIngresada);
    if(rutaIngresada == 'error'){
      alert('No se puede ingresar a la ruta');
      return false;
     } else {
        return true;
      }
    }
  }



export const guardiaSesionGuard: CanActivateFn = (route, state) => {
  return inject(PermissionService).puedeActivarLaRuta(route.url.toString());
};
