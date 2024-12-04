import { Injectable } from "@angular/core";
import { mascota } from "../mascota.models";
import { ServicioMascotaService } from "./servicio-mascota.service";
import { DataServices } from "./data.service";
import { AlertasService } from './alertas.service';


@Injectable({
  providedIn: 'root'
})
export class mascotasService{
  /*mascotas: mascota []=[
    new mascota('Rosa','Florencia',12345678,'rosa@gmail.com','hachy','perro',5,'husky')
  ];*/

  mascotas: mascota []=[];

  constructor(private servicioMensaje: ServicioMascotaService, private dataService: DataServices, private alertasService: AlertasService){}

    agregar_mascota(mascota:mascota){

      this.mascotas.push(mascota);
      this.dataService.guardar_arreglo(this.mascotas);
      this.alertasService.mostrarExito('¡Éxito!', 'Mascota agregada correctamente');

    }

    encontrar_mascota(indice: number){
      let mascota: mascota = this.mascotas[indice];
      return mascota;
    }

    actualizar_mascota(indice: number, mascota:mascota){
      this.alertasService
      .mostrarConfirmacion('¿Confirmar Actualización?', '¿Desea guardar los cambios?')
      .then((confirmado) => {
        if (confirmado) {
      let mascotaModificado = this.mascotas[indice];
      mascotaModificado.n_dueno = mascota.n_dueno;
      mascotaModificado.direccion = mascota.direccion;
      mascotaModificado.numero = mascota.numero;
      mascotaModificado.correo = mascota.correo;
      mascotaModificado.n_mascota = mascota.n_mascota;
      mascotaModificado.tipo_mascota = mascota.tipo_mascota;
      mascotaModificado.edad = mascota.edad;
      mascotaModificado.raza = mascota.raza;
       Object.assign(this.mascotas[indice], mascota);
      this.dataService.actualizar_posicion(indice, mascota);

      this.alertasService.mostrarExito('Actualización Exitosa', 'La mascota ha sido actualizada correctamente.');
        }
      });

    }

    eliminar_mascota(indice: number){
      this.alertasService
      .mostrarConfirmacion('¿Está seguro?', 'Esta acción no se puede deshacer')
      .then((confirmado) => {
        if (confirmado) {
      this.mascotas.splice(indice, 1);
      this.dataService.eliminar_posicion(indice);
      this.dataService.guardar_arreglo(this.mascotas);
      this.alertasService.mostrarExito('Eliminacion Exitosa', 'La mascota ha sido eliminada correctamente.');
    }
  });

    }

    obtener_mascotas(){
      return this.dataService.cargar_arreglo();//observable -> permite operaciones asincronas en 2do plano, actualizar sin hacer select
    }

    set_mascotas(misMascotas: mascota[]){
      this.mascotas = misMascotas;
    }
}
