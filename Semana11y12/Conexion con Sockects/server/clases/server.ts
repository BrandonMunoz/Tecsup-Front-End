import { SERVER_PORT } from '../globals/environment';
import express from 'express';
import socketIO from 'socket.io';
import http from 'http';
import { UsuariosLista } from './usuario-lista';
import { Usuario } from './usuario';
import {MArcador} from './marcador';
import {mapa} from '../routes/router';

export default class Server{

    public app:express.Application;
    public port:Number;
    //servidor para emitir y escuchar eventos
    public io: socketIO.Server;
    private httpServer:http.Server;
    public usuariosConectados = new UsuariosLista();


    private constructor(){
        this.app = express();
        this.port = SERVER_PORT;
        //configurando el nuevo server
        this.httpServer = new http.Server(this.app);
        //cnfigurando el socket
        this.io = socketIO(this.httpServer);
        this.escucharSockets();
    }
    //PROGRAMANDO GETTER
    //DE LA UNICA INSTANCIA DE LA CLASE
    //PATRON DE DISEÑO SINGLETON
    private static _instance:Server;

    public static get instance(){
        if(this._instance){
            return this._instance;
        }else{
            this._instance = new this();
            return this._instance;
        }
    }

    private escucharSockets(){
        console.log("Escuchando conexiones o sockets");
        this.io.on('connection',cliente=>{
            console.log("nuevo cliente conectado",cliente.id);
            const usuario = new Usuario(cliente.id);
            this.usuariosConectados.agregar(usuario);
            

            //CUANDO EL CLIENTE SE DESCONECTA
            cliente.on('disconnect',()=>{
                console.log("nuevo cliente desconectado",cliente.id);
                this.usuariosConectados.borrarUsuario(cliente.id);
                this.io.emit('usuarios-activos',this.usuariosConectados.getLista());
            });

            //Mapas: evento para escuchar socket de nombre "nuevo-lugar"
            //Y agregar el nuevo lugar al arreglo de los lugares

            cliente.on('nuevo-lugar',(lugar:MArcador)=>{
                mapa.agregarMarcador(lugar);
                console.log(mapa.getMarcadores());
                cliente.broadcast.emit('nuevo-lugar',lugar);
                // this.io.emit('nuevo-lugar',lugar);
            });

            //MAPAS: evento para escuchar sockets de nombre "borrar-lugar"
            //y borrar el lugar del arreglo de lugares del servidor
            cliente.on('borrar-lugar',(id:string)=>{
                mapa.borrarMarcador(id);
                this.io.emit('borrar-lugar',id);
            });

            //evento para mover el marcador en cualquier ventana
            cliente.on('mover-lugar',(id:string)=>{
                mapa.moverLugar(id);
                this.io.emit('mover-lugar',id);
            });

            //el cliente que se ha conectado previamente, escucha un evento de nomobre: 'men
            cliente.on('mensaje',(payload:any)=>{
                console.log("nuevo mensaje ",payload);
                this.io.emit("mensaje-nuevo",payload);

            });
            cliente.on("configurar-usuario",(payload:any,callback:Function)=>{
                this.usuariosConectados.actualizarNombre(cliente.id,payload.nombre);
                this.io.emit('usuarios-activos',this.usuariosConectados.getLista());
                callback({
                    ok:true,
                    mensaje:`Usuario ${payload.nombre} configurado`
                });
            });

            cliente.on('obtener-usuarios',()=>{
                this.io.in(cliente.id).emit('usuarios-activos',this.usuariosConectados.getLista());
            });
        });
    }

    start(callback:Function){
        this.httpServer.listen(this.port, callback);

    }
}