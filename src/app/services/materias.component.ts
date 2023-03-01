import { Materias } from "../interfaces/Materia";


export class MateriaComponent implements OnInit {
    semestreSeleccionado : number =1;
    materias: Materias[]=[];

    constructor(
        private _materiaService: MateriaService
    ){
        this.materias = this._materiaService.getMaterias();
    }
    ngOnInit() : void {
    
    }
}