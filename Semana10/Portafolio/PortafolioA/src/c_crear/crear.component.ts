import { Component } from '@angular/core';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';
import { SubirImagenService } from '../services/subirimagen.service';

@Component({
    selector:'crear',
    templateUrl:'./crear.component.html',
    providers: [ProjectService, SubirImagenService]
})
export class CrearComponent{
    public titulo:string ="Crear Proyecto";
    public descripcion:string ="Formulario para Crear un Proyecto";
    public objProject:Project;
    public creado:string;
    public resultado:string;
    public files:Array<File>;
    public proyecto_creado;

    constructor(private _projectService:ProjectService,
                private _subirService:SubirImagenService){
        this.objProject = new Project("","","","",0,"","");
    }
    
    public onSubmit(formulario){
        this._projectService.crearProyecto(this.objProject).subscribe(response=>{
            if(response.creado){
                //subir la imagen
                if(this.files){
                    this._subirService.subirImagen(response.creado._id,[],this.files,'image')
                            .then((result:any)=>{
                                //result = objProject
                                
                                this.proyecto_creado = result.project;
                                this.creado = "si";
                                this.resultado = "El proyecto ha sido creado correctamente!";
                                console.log(this.proyecto_creado);
                            }).catch((err)=>{
                                this.creado = "no";
                                this.resultado = "Ups!, un error ha ocurrido en el camino";
                            });
                }else{
                    this.proyecto_creado = response.creado;
                    this.creado = "si";
                    this.resultado = "El proyecto ha sido creado correctamente!";
                }
            }else{
                this.creado = "no";
                this.resultado = "Ups!, un error ha ocurrido en el camino";
            }
        }, error=>{
            
        });
    }
    
    public archivoModificado(fileInput:any){
        //Casteando o convirtiendo a archivos de tipo JavaScript
        console.log("se ha cambiado la imagen");
        console.log(fileInput);
        this.files = <Array<File>>fileInput.target.files;
    }
}