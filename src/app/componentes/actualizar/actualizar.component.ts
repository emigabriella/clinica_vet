import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { mascota } from '../../mascota.models';
import { ActivatedRoute, Router } from '@angular/router';
import { mascotasService } from '../../services/mascotas.service';


@Component({
  selector: 'app-actualizar',
  standalone: true,
  imports: [FormsModule],
  providers: [],
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.css'
})
export class ActualizarComponent implements OnInit{
  volverDatos(){
    this.router.navigate(['registro-datos']);
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

  indice!: number;
  accion!: number;

  constructor(private router: Router, private mascotasService: mascotasService, private route: ActivatedRoute){
    //this.mascotas = this.mascotasService.mascotas;
  }

  ngOnInit(): void {
    this.accion =parseInt(this.route.snapshot.queryParams['accion'])
    this.indice = this.route.snapshot.params['id'];
    let mascota: mascota = this.mascotasService.encontrar_mascota(this.indice);
    this.cuadro_n_dueno=mascota.n_dueno;
    this.cuadro_direccion=mascota.direccion;
    this.cuadro_numero=mascota.numero;
    this.cuadro_correo=mascota.correo;
    this.cuadro_n_mascota=mascota.n_mascota;
    this.cuadro_tipo_mascota=mascota.tipo_mascota;
    this.cuadro_edad=mascota.edad;
    this.cuadro_raza=mascota.raza;

  }

  actualizar_mascota(){
    let miMascota = new mascota(this.cuadro_n_dueno, this.cuadro_direccion, this.cuadro_numero,
    this.cuadro_correo, this.cuadro_n_mascota, this.cuadro_tipo_mascota, this.cuadro_edad,
    this.cuadro_raza);

    this.mascotasService.actualizar_mascota(this.indice, miMascota);


      this.router.navigate(['registro-datos']);

}

  }
  /*actualizar_mascota(){
    //if
    let miMascota = new mascota(this.cuadro_n_dueno,this.cuadro_direccion,this.cuadro_numero,
    this.cuadro_correo,this.cuadro_n_mascota,this.cuadro_tipo_mascota,this.cuadro_edad,
    this.cuadro_raza);

    //this.miServicio.muestra_mensaje("Registro realizado exitosamente");

    //this.mascotas.push(mimascota);
    this.mascotasService.actualizar_mascota(this.indice, miMascota);

    this.router.navigate(['']);

    this.cuadro_n_dueno="";
    this.cuadro_direccion="";
    this.cuadro_numero=0;
    this.cuadro_correo="";
    this.cuadro_n_mascota="";
    this.cuadro_tipo_mascota="";
    this.cuadro_edad=0;
    this.cuadro_raza="";

  }*/

