import { Component, Input, OnInit } from '@angular/core';
import { mascota } from '../../mascota.models';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CaracteristicasComponent } from '../caracteristicas/caracteristicas.component';

@Component({
  selector: 'app-mascota-h-c',
  standalone: true,
  imports: [CommonModule, RouterModule, CaracteristicasComponent],
  templateUrl: './mascota-h-c.component.html',
  styleUrl: './mascota-h-c.component.css'
})
export class MascotaHCComponent{
    @Input() mascotaLista!: mascota;
    @Input() indice!: number;
    array_caracteristicas = [''];
    mascota: any;

    listaMascotas = [
      {
      }
    ];

    agregarMascota(nuevaMascota: any) {
      this.listaMascotas.push(nuevaMascota); // Agrega una nueva fila a la tabla
    }

    agregar_caracteristica(caracteristica:string){
      this.array_caracteristicas.push(caracteristica);
    }



}
