import React, { Component } from 'react';

class TareasForm extends Component {
    constructor() {
        super();
        this.state = {
            titulo: "Default",
            descripcion: "Default",
            responsable: "Default",
            prioridad: "Deafult"
        }

        this.miSubmit = this.miSubmit.bind(this);
        this.miChange = this.miChange.bind(this);
    }


    miSubmit(evento){
        evento.preventDefault();
        this.props.onAgregarTareaDestino(this.state);
    }

    miChange(evento){
        const {value, name} = evento.target;

        //parece ser asincrono, si se coloca un callback =>{} se vuelve sincrono, creo
        this.setState ({
            [name]:value
        });
        console.log(this.state);
    }

    miFormulario(evento){
        
    }


    render() {
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.miSubmit}>
                    <div className="form-group">
                        <input type="text"
                            name="titulo"
                            className="form-control"
                            placeholder="Titulo"
                            onChange={this.miChange}>
                        </input>
                    </div>
                    <div className="form-group">
                        <input type="text"
                            name="descripcion"
                            className="form-control"
                            placeholder="Descripcion"
                            onChange={this.miChange}>
                        </input>
                    </div>
                    <div className="form-group">
                        <input type="text"
                            name="responsable"
                            className="form-control"
                            placeholder="Responsable"
                            onChange={this.miChange}>
                        </input>
                    </div>
                    <div className="form-group">
                        <select name="prioridad"
                            className="form-control"
                            onChange={this.miChange}>
                            <option>Alta</option>
                            <option>Media</option>
                            <option>Baja</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Crear Tarea</button>
                    <button type="save" className="btn btn-gray">Guardar Cambios</button>
                </form>
            </div>
        )
    }
}

export default TareasForm;