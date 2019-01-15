import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:'mostrar',
    templateUrl:'./mostrar.component.html',
    providers: [ProjectService]
})
export class MostrarComponent implements OnInit{
    public proyectos:Array<Array<Project>> = new Array();
    public aux:Array<Project> = new Array();
    public idAEliminar:string;

    constructor(private _router:Router,
                private _route:ActivatedRoute,
                private _projectService:ProjectService){}
    
    ngOnInit(){
        this.getProyectos();
    }
    public getProyectos(){
        this._projectService.getProyectos().subscribe(
            response=>{
                for(let i = 0; i<response.projects.length;i++){
                    this.aux.push(response.projects[i]);
                    if((i+1) % 3 == 0){
                        this.proyectos.push(this.aux);
                        this.aux = [];
                    }
                    if(i == response.projects.length-1){
                        this.proyectos.push(this.aux);
                    }
                }
                console.log(this.proyectos);
            },
            error=>{
                console.log(error);
            }
        );
    }
    onEliminar():void{
        //tras eliminar, la página se debe recargar
        this._projectService.deleteProyectoById(this.idAEliminar).subscribe(
            response=>{
                // this._router.navigateByUrl("/mostrar");
                this.proyectos = [];
                this.aux = [];
                this.getProyectos();
                // $('#eliminarModal').modal("hide");
            },
            error=>{
                console.log(error);
            }
        );
    }
    setProyectoAEliminar(id:string){
        this.idAEliminar = id;
    }
}