import { Component,OnInit,ViewChild,ElementRef } from '@angular/core';
import {Lugar} from '../../interfaces/lugar';
import {WebsocketService} from '../../services/websocket.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'maps-root',
  templateUrl: './maps.component.html',
  //styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit{
  @ViewChild('map') mapaElement:ElementRef;

    public map:google.maps.Map;
    
    public lugares:Lugar[] = [];
    public marcadores:google.maps.Marker[]=[];
    constructor(private _wsService:WebsocketService,
                private _http:HttpClient){

    }
    public ngOnInit(){
        this._http.get("http://localhost:3700/mapas").subscribe((lugares:Lugar[])=>{
            this.lugares = lugares;
            this.cargarMapa();
            
        });
        this.getCurrentPosition();
        this.escucharSockets();
        
    }
    //SOCKET PARA AGREGAR UN LUGARD EDE EL SERVIDOR
    public escucharSockets(){
        this._wsService.escuchar('nuevo-lugar').subscribe((lugar:Lugar)=>{
            this.agregarMarcador(lugar);
        });
    //SOCKET PARA BORRAR UN LUGAR DESDE EL SERVIDOR
        this._wsService.escuchar('borrar-lugar').subscribe((id:string)=>{
            this.marcadores.forEach((elemento)=>{
                //id!==elemento.getTitle();
                if(id===elemento.getTitle()){
                    elemento.setMap(null);
                }
            });
        });
    }   
     


    public cargarMapa(){
        const latLgn = new google.maps.LatLng(-16.4310231,-71.5189684);
        const mapaOpciones: google.maps.MapOptions={
            center:latLgn,
            zoom:13,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        }
        this.map = new google.maps.Map(this.mapaElement.nativeElement,mapaOpciones);

        this.map.addListener('click',(coors)=>{
            let objLugar:Lugar={
                id:new Date().toISOString(),
                nombre:"Lugar 123",
                lat:coors.latLng.lat(),
                lng:coors.latLng.lng()
            }
            this.agregarMarcador(objLugar);
            //disparar un socket para agregar marcador en el back
            this._wsService.emitir("nuevo-lugar",objLugar);
        });

        for(let lugar of this.lugares){
            this.agregarMarcador(lugar);
        }
    }
 
    public agregarMarcador(marcador:Lugar){
        const latLgn = new google.maps.LatLng(marcador.lat,marcador.lng);
        const marker = new google.maps.Marker({
            map:this.map,
            position:latLgn,
            animation: google.maps.Animation.BOUNCE,
            draggable:true,
            title:marcador.id
        });
        //arastrar marcador
    google.maps.event.addDomListener(marker,'drag',(coors)=>{
    console.log("Lat=>" + coors.latLng.lat());
    });
    //eliminar marcador
    google.maps.event.addDomListener(marker,'dblclick',(coors)=>{
    marker.setMap(null);
    this._wsService.emitir('borrar-lugar',marker.getTitle());
    });

    //mover en cualquier ventana
    google.maps.event

     //click en el marcador
     const contenido= `<strong>${marcador.nombre}</strong>`;
     const ventana = new google.maps.InfoWindow({
         content:contenido
     })

     google.maps.event.addDomListener(marker,'click',()=>{
         ventana.open(this.map,marker)
     })
        this.marcadores.push(marker);
        
    }

    public getCurrentPosition(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((posicion)=>{
                console.log(posicion.coords);
                const miPosicion:Lugar ={
                    id:"0823",
                    lat:posicion.coords.latitude,
                    lng:posicion.coords.longitude,
                    nombre:"Mi Ubicaion"
                }
                this.agregarMarcador(miPosicion);
            })
        }
    }
}



























