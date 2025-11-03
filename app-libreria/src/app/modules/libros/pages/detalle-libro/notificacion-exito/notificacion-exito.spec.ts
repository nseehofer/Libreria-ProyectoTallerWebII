import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionExito } from './notificacion-exito';

describe('NotificacionExito', () => {
  let component: NotificacionExito;
  let fixture: ComponentFixture<NotificacionExito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificacionExito]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificacionExito);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
