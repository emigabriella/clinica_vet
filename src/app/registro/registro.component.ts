import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { mascota } from '../mascota.models';
import { mascotasService } from '../mascotas.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  providers: [Router],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit{
  volverDatos(){
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
    this.mascotas = this.mascotasService.mascotas;
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
