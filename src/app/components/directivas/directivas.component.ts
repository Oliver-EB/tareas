import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {


  materias : string[]= [
    'Matematicas',
    'aplicaciones',
    'integradora',
    'desarrollo movil'

];
contador = 0;
mostrarmensaje = true;
constructor(){

}
ngOnInit(): void {
  
}
}
