import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notificacion-exito',
  standalone: true, // Asumimos que es standalone como tus otros componentes
  imports: [],
  templateUrl: './notificacion-exito.html',
  styleUrl: './notificacion-exito.css',
})
export class NotificacionExito {
  // Recibe un booleano desde el componente padre (DetalleLibro)
  @Input({ required: true }) isVisible!: boolean;
}