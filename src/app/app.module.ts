import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { EstudianteService } from './estudiantes/estudiante.service';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { DirectivaComponent } from './directiva/directiva/directiva.component';
import { HttpClientModule} from '@angular/common/http';
import { FormComponent } from './estudiantes/form.component';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
  {path:'', redirectTo: '/estudiantes', pathMatch: 'full'},
  {path:'directivas', component: DirectivaComponent},
  {path:'estudiantes' , component: EstudiantesComponent},
  {path:'estudiantes/form' , component: FormComponent},
  {path:'estudiantes/form/:id' , component: FormComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EstudiantesComponent,
    DirectivaComponent,
    FormComponent
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [EstudianteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
