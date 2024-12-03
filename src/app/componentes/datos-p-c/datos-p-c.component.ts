import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { mascota } from '../../mascota.models';
import { ServicioMascotaService } from '../../services/servicio-mascota.service';
import { MascotaHCComponent } from '../mascota-h-c/mascota-h-c.component';
import { FormsModule } from '@angular/forms';
import { mascotasService } from '../../services/mascotas.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-datos-p-c',
  standalone: true,
  imports: [CommonModule, FormsModule, MascotaHCComponent],
  providers: [ServicioMascotaService, LoginService],
  templateUrl: './datos-p-c.component.html',
  styleUrl: './datos-p-c.component.css'
})
export class DatosPCComponent implements OnInit{

  mascotas!: mascota[];

  cuadro_n_dueno: string = "";
  cuadro_direccion : string = "";
  cuadro_numero : number = 0;
  cuadro_correo : string = "";
  cuadro_n_mascota : string = "";
  cuadro_tipo_mascota : string = "";
  cuadro_edad : number = 0;
  cuadro_raza : string = "";

  constructor(private miServicio: ServicioMascotaService, private mascotasService: mascotasService){
    //this.mascotas = this.mascotasService.mascotas;
  }

  ngOnInit(): void {
    /*this.mascotas = this.mascotasService.mascotas;*/
    this.mascotasService.obtener_mascotas().subscribe(
      misMascotas =>{
        console.log(misMascotas);
        this.mascotas = Object.values(misMascotas);
        this.mascotasService.set_mascotas(this.mascotas);
      }
    )
  }

  guardar_mascota(){
    //if
    let miMascota = new mascota(this.cuadro_n_dueno,this.cuadro_direccion,this.cuadro_numero,
    this.cuadro_correo,this.cuadro_n_mascota,this.cuadro_tipo_mascota,this.cuadro_edad,
    this.cuadro_raza);

    //this.miServicio.muestra_mensaje("Registro realizado exitosamente");

    //this.mascotas.push(mimascota);
    this.mascotasService.agregar_mascota(miMascota);

    this.cuadro_n_dueno="";
    this.cuadro_direccion="";
    this.cuadro_numero=0;
    this.cuadro_correo="";
    this.cuadro_n_mascota="";
    this.cuadro_tipo_mascota="";
    this.cuadro_edad=0;
    this.cuadro_raza="";
  }
}
