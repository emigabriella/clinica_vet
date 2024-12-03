import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { mascota } from "../mascota.models";
import { LoginService } from "../componentes/login/login.service";
@Injectable({
  providedIn:'root'
})
export class DataServices{
  constructor(private httpClient: HttpClient, private loginService: LoginService){}

    guardar_arreglo(mascotas: mascota[]){
        this.httpClient.put('https://clinic-vet-8a11c-default-rtdb.firebaseio.com/mdatos.json', mascotas).subscribe(
            response => console.log("Se han guardado los cambios en firebase"),
            error=>console.log('Error: ' + error)
        );
    }

    cargar_arreglo(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://clinic-vet-8a11c-default-rtdb.firebaseio.com/mdatos.json?auth=' + token);
    }

    actualizar_posicion(indice: number, mascota: mascota){
        let url = "https://clinic-vet-8a11c-default-rtdb.firebaseio.com/mdatos/" + indice + ".json";

        this.httpClient.put(url, mascota).subscribe(
            response =>console.log("Se ha actualizado la mascota " + response),
            error =>console.log("Error: "+ error)
        );
    }

    eliminar_posicion(indice: number){
        let url = "https://clinic-vet-8a11c-default-rtdb.firebaseio.com/mdatos/" + indice + ".json";

        this.httpClient.delete(url).subscribe(
            response => console.log("Se ha eliminado la mascota " + response),
            error => console.log("Error: " + error)
        );
    }
}
