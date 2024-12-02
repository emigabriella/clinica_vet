import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioMascotaService {

  constructor() { }

  muestra_mensaje(mensaje: string){
    alert(mensaje)
  }
}
