import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioMascotaService } from '../../services/servicio-mascota.service';

@Component({
  selector: 'app-caracteristicas',
  standalone: true,
  imports: [],
  providers:[ServicioMascotaService],
  templateUrl: './caracteristicas.component.html',
  styleUrl: './caracteristicas.component.css'
})
export class CaracteristicasComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() caracteristicasMascotas = new EventEmitter<string>();

  constructor(private miServicio: ServicioMascotaService){}

  agregar_caracteristica(value: string){
    //this.miServicio.muestra_mensaje("Caracteristica agregada: " + value);
    this.caracteristicasMascotas.emit(value);
  }
}
