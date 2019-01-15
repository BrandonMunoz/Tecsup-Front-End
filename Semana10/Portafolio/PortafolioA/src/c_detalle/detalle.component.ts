import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';

@Component({
    selector:'detalle',
    templateUrl:'./detalle.component.html',
    providers:[ProjectService]
})
export class DetalleComponent implements OnInit{
    public proyecto:Project;
    public id:string;
    constructor(
        private _router:Router,
        private _route:ActivatedRoute,
        private _projectService:ProjectService
    ){}

    ngOnInit():void{
        this._route.params.subscribe(params =>{
            this.id = params.id;
        });
        this.setearProyecto(this.id);
    }
    setearProyecto(id:string){
        this._projectService.getProyectoById(id).subscribe(
            response =>{
                this.proyecto = response.found;
            },
            error=>{
                console.log(error);
            }
        );
    }
}