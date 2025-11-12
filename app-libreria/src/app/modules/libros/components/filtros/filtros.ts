import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

export interface FiltrosLibro {
  nombre: string | null;
  categoriaId: number | null;
  precioMax: number | null;
}

@Component({
  selector: 'app-filtros',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './filtros.html',
  styleUrl: './filtros.css',
})
export class Filtros implements OnInit, OnDestroy{

  @Output() filtroCambiado = new EventEmitter<FiltrosLibro>();

  filtroForm: FormGroup = new FormGroup({
    nombre: new FormControl(''),
    categoriaId: new FormControl(null),
    precioMax: new FormControl(null)
  });

  private formSub!: Subscription;

  ngOnInit(): void {
    this.formSub = this.filtroForm.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(valores => {
      this.filtroCambiado.emit(valores as FiltrosLibro);
    });
  }

  ngOnDestroy(): void {
    if (this.formSub) {
      this.formSub.unsubscribe();
    }
  }

}