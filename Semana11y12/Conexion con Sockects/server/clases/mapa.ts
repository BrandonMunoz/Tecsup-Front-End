import { MArcador} from './marcador';
export class Mapa{
    public marcadores:MArcador[]=[];
    constructor(){}

    getMarcadores(){
        return this.marcadores;
    }
    agregarMarcador(marcador:MArcador){
        this.marcadores.push(marcador);
    }
    borrarMarcador(id:string){
        this.marcadores = this.marcadores.filter((marcador)=>{
            if(id!==marcador.id){
                return marcador;
            }
        });
        return this.marcadores;
    }

    //funcion propia de mi para darle movimiento en cualquier ventana (capitan obvio)
    moverLugar(id:string){
        this.marcadores = this.marcadores.filter((marcador)=>{
            return marcador.id;
        });
    }

    moverMarcador(marcador:MArcador){
        for(let i in this.marcadores){
            if(this.marcadores[i].id===marcador.id){
                this.marcadores[i].lat=marcador.lat;
                this.marcadores[i].lng=marcador.lng;
                break;
            }
        }
    }
    
}