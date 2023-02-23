import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Estudiante } from "./estudiante";
import { EstudianteService } from "./estudiante.service";
import swal from "sweetalert2";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
})
export class FormComponent implements OnInit {
  estudiante: Estudiante = new Estudiante();
  titulo: string = "Crear Estudiante";

  selectedDocument = 0;
  documentos = [{ id: 0, name: 'Select Document' },
  { id: 1, name: 'Cedula Ciudadania' },
  { id: 2, name: 'Registro Civil' },
  { id: 3, name: 'Tarjeta Identidad' },
  { id: 4, name: 'Pasaporte' }]


  constructor(
    private estudianteService: EstudianteService,
    private router: Router,
    private activatedRouted: ActivatedRoute
  ) {}
  ngOnInit() {
    this.cargarEstudiante();
    this.update();
    
  }
  cargarEstudiante(): void {
    this.activatedRouted.params.subscribe((params) => {let id = params['id'];
    if (id) {
        this.estudianteService.getEstudiante(id).subscribe((estudiante) => (this.estudiante = estudiante));
      }
    });
  }
  update(): void {
    this.estudianteService.update(this.estudiante).subscribe((estudiante) => {
      this.router.navigate(["/estudiantes"]);
      swal.fire('estudiante actualizado',`Estudiante ${estudiante.primerNombre} actualizado con exito!`,'success');
    });
  }

  public create(): void { 
    this.estudianteService.create(this.estudiante).subscribe((estudiante) => {
      this.router.navigate(["/estudiantes"]);
      swal.fire('nuevo estudiante',`Estudiante ${estudiante.primerNombre} creado con exito!`,'success');
    });
    console.log(this.estudiante)
  }

}
