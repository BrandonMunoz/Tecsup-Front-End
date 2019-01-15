import {Router, Request, Response} from 'express';
import Server from '../clases/server';
import { Mapa } from '../clases/mapa';
export const router = Router();

router.get('/mensajes',(req:Request, res:Response)=>{
    res.json({
        ok:true,
        mensaje: 'Respuesta ok!'
    })
});





const lugares=[
    {
        id:"1",
        nombre:"lugar  1",
        lat:-16.4310231,
        lng:-71.5189684
    },
    {
        id:"2",
        nombre:"lugar  2",
        lat:-16.4410235,
        lng:-71.5389680 
    }
]

export const mapa = new Mapa;
mapa.marcadores=lugares;
//rutas de mapas
router.get('/mapas',(req:Request,res:Response)=>{
    return res.json(mapa.getMarcadores());
});


router.post('/mensajes',(req:Request,res:Response)=>{
    var entrada = req.body.entrada;
    var de = req.body.de;
    const payload={
        entrada:entrada,
        de:de,
    }
    const server = Server.instance;
    server.io.emit('mensajes-broadcast',payload);
    res.status(200).send({
        ok:true,
        mensaje: "Mensaje-correcto",
        entrada:entrada
    });
})

// router.post('/mensajes/:id',(req:Request, res:Response)=>{

//     const cuerpo = req.body.cuerpo;
//     const id = req.params.id;

//     res.json({
//         ok:true,
//         mensaje: 'Respuesta ok! con post',
//         cuerpo,
//         id
//     });
    router.post('/mensajes/:id',(req:Request, res:Response)=>{

        var entrada = req.body.entrada;
        var de = req.body.de;
        var id = req.params.id;
        const payload = {
            de:de,
            cuerpo:entrada
        }
        const server = Server.instance;
        server.io.in(id).emit('mensaje-privado',payload);
    
    
        res.status(200).send({
            ok:true,
            mensaje: 'Mensaje-correcto',
            entrada:entrada,
            id:id,
        });

        

});



router.get('/usuarios',(req:Request,res:Response)=>{
    const server = Server.instance;
    //RETORNA EL ARREGLO DE SOCKETS CONECTADOS
    server.io.clients((err:any,clientes:string[])=>{
        if(err){
            return res.status(505).send({
                ok:false,
                err:err
            });
        }else{
            return res.status(200).send({
                ok:true,
                clientes
            });
        }
    });
});
































