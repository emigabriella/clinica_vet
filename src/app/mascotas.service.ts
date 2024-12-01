import { Injectable } from "@angular/core";
import { mascota } from "./mascota.models";
import { ServicioMascotaService } from "./servicio-mascota.service";
import { DataServices } from "./data.service";



@Injectable({
  providedIn: 'root'
})
export class mascotasService{
  mascotas: mascota []=[
    new mascota('Rosa','Florencia',12345678,'rosa@gmail.com','hachy','perro',5,'husky')
  ];

  constructor(private servicioMensaje: ServicioMascotaService, private dataService: DataServices){}

    agregar_mascota(mascota:mascota){
      this.servicioMensaje.muestra_mensaje("nombre ingresado: " + mascota.n_dueno);
      this.mascotas.push(mascota);
      this.dataService.guardar_arreglo(this.mascotas);
    }

    encontrar_mascota(indice: number){
      let mascota: mascota = this.mascotas[indice];
      return mascota;
    }

    actualizar_mascota(indice: number, mascota:mascota){
      let mascotaModificado = this.mascotas[indice];
      mascotaModificado.n_dueno = mascota.n_dueno;
      mascotaModificado.direccion = mascota.direccion;
      mascotaModificado.numero = mascota.numero;
      mascotaModificado.correo = mascota.correo;
      mascotaModificado.n_mascota = mascota.n_mascota;
      mascotaModificado.tipo_mascota = mascota.tipo_mascota;
      mascotaModificado.edad = mascota.edad;
      mascotaModificado.raza = mascota.raza;

      this.dataService.actualizar_posicion(indice, mascota);
    }

    eliminar_empleado(indice: number){
      this.mascotas.splice(indice, 1);
      this.dataService.eliminar_posicion(indice);
      this.dataService.guardar_arreglo(this.mascotas);
    }

    obtener_empleados(){
      return this.dataService.cargar_arreglo();//observable -> permite operaciones asincronas en 2do plano, actualizar sin hacer select
    }

    set_empleados(mismascotas: mascota[]){
      this.mascotas = mismascotas;
    }
}
