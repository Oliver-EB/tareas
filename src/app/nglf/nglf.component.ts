import { Component, OnInit } from "@angular/core";

@Component({

selector:'nglf',
templateUrl:'./nglf.component.html',
styleUrls:['./nglf.component.css'],

})
export class nglf implements OnInit {


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
    ngOnInit(): void{
       
    }
}