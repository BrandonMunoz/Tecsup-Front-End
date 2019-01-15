import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';
import { SubirImagenService} from '../services/subirimagen.service';

@Component({
    selector:'editar',
    templateUrl:'../c_crear/crear.component.html',
    providers:[ProjectService, SubirImagenService]
})
export class EditarComponent implements OnInit{
    public titulo:string="Editar Proyecto";
    public objProject:Project;
    public id:string;
    public editado:string;
    public resultado:string;
    public files:Array<File>;
    public descripcion:string ="Formulario para Editar un Proyecto";
    constructor(
        private _router:Router,
        private _route:ActivatedRoute,
        private _projectService:ProjectService,
        private _subirImagenService:SubirImagenService
    ){}

    public ngOnInit():void{
        this._route.params.subscribe(
            params=>{
                this.id = params.id;
            }
        );
        this.setProyecto();
        
    }
    public setProyecto(){
        this._projectService.getProyectoById(this.id).subscribe(
            response => {
                this.objProject = response.found;
            },
            error =>{
                console.log(error);
            }
        );
    }

    public onSubmit(form){
        this._projectService.updateProyecto(this.objProject).subscribe(
            response=>{
                console.log(response);
                //verificando que el proyecto se haya actualizado
                if(response.actualizado){
                    //Subiendo la imagen
                    if(this.files){
                        //actualizar la imagen
                        this._subirImagenService.subirImagen(response.actualizado._id,[],this.files,'image')
                                                .then((result:any)=>{
                                                    this.resultado = "El proyecto se ha editado de manera correcta!";
                                                    this.editado = "si";
                                                    document.getElementById("imagen").setAttribute("src","http://localhost:3700/API/get-image/"+result.project.image);                      
                                                })
                                                .catch((error:any)=>{
                                                    this.resultado = "Error: La imagen no se ha actualizado";
                                                    this.editado = "no";  
                                                });
                    }else{
                        //actualizar solamente el proyecto sin imagen
                        this.resultado = "El proyecto se ha editado de manera correcta!";
                        this.editado = "si";
                    }
                }else{
                    this.resultado = "Error: El proyecto no se ha actualizado";
                    this.editado = "no";
                }
            },
            error=>{
                this.resultado = "Error: El proyecto no se ha actualizado";
                this.editado = "no";
            }
        );
    }

    public archivoModificado(fileInput:any){
        //Casteando o convirtiendo a archivos de tipo JavaScript
        console.log("se ha cambiado la imagen");
        console.log(fileInput);
        this.files = <Array<File>>fileInput.target.files;
    }
}