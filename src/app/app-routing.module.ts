import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MateriaComponent } from './components/materia/materia.component';
import { nglf } from './nglf/nglf.component';

const ROUTES : Routes = [
{path:'home', component: AppComponent},
{path:'directivas', component: nglf},
{path:'materias', component: MateriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
