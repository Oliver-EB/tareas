import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { nglf } from './nglf/nglf.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { AppRoutingModule } from './app-routing.module';
import { MateriasComponent } from './components/materias/materias.component';
import { MateriaComponent } from './components/materia/materia.component';

@NgModule({
  declarations: [
    AppComponent,
    nglf,
    DirectivasComponent,
    MateriasComponent,
    MateriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MateriaComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
