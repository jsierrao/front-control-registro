import { Component, OnInit } from '@angular/core';
import { Estudiante } from './estudiante';
import { EstudianteService } from './estudiante.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html'
})
export class EstudiantesComponent implements OnInit {

  estudiantes: Estudiante[] = [];

constructor(private service: EstudianteService){};

ngOnInit() {
   
  this.service.getEstudiantes().subscribe(
    estudiantes => this.estudiantes = estudiantes
  );

}

}
