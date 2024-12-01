import { Component, Input } from '@angular/core';
import { mascota } from '../mascota.models';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mascota-h-c',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mascota-h-c.component.html',
  styleUrl: './mascota-h-c.component.css'
})
export class MascotaHCComponent {
    @Input() mascotaLista!: mascota;
    @Input() indice!: number;
    array_caracteristicas = [''];

    agregar_caracteristica(caracteristica:string){
      this.array_caracteristicas.push(caracteristica);
    }

}
