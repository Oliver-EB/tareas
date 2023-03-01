import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {
  
  private materias: Materias[]= [
    {
      cuatrimestre :1,
      materias:"Fundamentos de ti",
      fecha : "78/78/78",
      Imagen : ""
    }
    ];
    getMaterias(): Materias[] {
      return this.materias;
  }

  constructor() { 
    
  }

 
}
