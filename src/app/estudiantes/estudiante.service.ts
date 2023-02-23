import { Injectable } from '@angular/core';
import { ESTUDIANTES } from './estudiantes.json';
import { Estudiante } from './estudiante';
import {Observable }from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable()
export class EstudianteService {
  private urllista = "http://localhost:9095/estudianteslistar";
  private urlcrear = "http://localhost:9095/estudiantesregistro";
  private urleditar = "http://localhost:9095/estudiantes";
  private urlinitialform = "http://localhost:9095/estudiantesconsulta"
  private urlporid = "http://localhost:9095/estudiantesporid"
  private urleliminar = "http://localhost:9095/eliminar"
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
 

  constructor(private http: HttpClient) { }

  getEstudiantes(): Observable<Estudiante[]>{
    //return this.http.get<Estudiante[]>(this.url);
    return this.http.get(this.urllista).pipe(map(response => response as Estudiante[]));
  }

  create(estudiante:Estudiante) : Observable<Estudiante>{
    return this.http.post<Estudiante>(this.urlcrear,estudiante,{headers: this.httpHeaders});
  }


  getEstudiante(id: any): Observable<Estudiante>{
    return this.http.get<Estudiante>(`${this.urlporid}/${id}`);
  }

  getListasFor(): Observable<Estudiante>{
    return this.http.get<Estudiante>(this.urlinitialform)
  }

  update(estudiante:Estudiante): Observable<Estudiante>{
    return this.http.put<Estudiante>(`${this.urleditar}/${estudiante.id}`, estudiante,{headers: this.httpHeaders})
  }

  delete(id:number): Observable<Estudiante>{
    return this.http.delete<Estudiante>(`${this.urleliminar}/${id}`,{headers: this.httpHeaders})
  }
 


 
}
