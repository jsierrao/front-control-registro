import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { Estudiante } from "./estudiante";
import { EstudianteService } from "./estudiante.service";

@Component({
  selector: "app-estudiantes",
  templateUrl: "./estudiantes.component.html",
})
export class EstudiantesComponent implements OnInit {
  estudiantes: Estudiante[] = [];
  
 

  constructor(private service: EstudianteService) {}

  ngOnInit() {
    this.service.getEstudiantes().subscribe((estudiantes) => (this.estudiantes = estudiantes));
  }

  delete(estudiante:Estudiante):void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'estas de seguro de esta operacion?',
      text: "No podras reversar esta operacion",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminalo!',
      cancelButtonText: 'No, cancela la operacion!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

 
}
