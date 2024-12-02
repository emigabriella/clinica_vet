import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { mascota } from '../mascota.models';
import { mascotasService } from '../services/mascotas.service';
import { MascotaHCComponent } from "../mascota-h-c/mascota-h-c.component";
import { CommonModule } from '@angular/common';
import { ServicioMascotaService } from '../services/servicio-mascota.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, MascotaHCComponent, CommonModule],
  providers: [ServicioMascotaService, LoginService],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit{
  volverHome(){
    this.router.navigate(['']);
  }

  mascotas!: mascota[];

  cuadro_n_dueno: string = "";
  cuadro_direccion : string = "";
  cuadro_numero : number = 0;
  cuadro_correo : string = "";
  cuadro_n_mascota : string = "";
  cuadro_tipo_mascota : string = "";
  cuadro_edad : number = 0;
  cuadro_raza : string = "";

  constructor(private router: Router, private mascotasService: mascotasService){
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

    this.router.navigate(['']);

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
