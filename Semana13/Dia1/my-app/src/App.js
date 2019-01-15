import React, { Component } from 'react';
import './App.css';
import { tareas } from './tareas.json';
import  TareasForm  from './components/TareasForm';

class App extends Component {

  constructor() {
    super();
    this.state = {
      tareas: tareas
    }
    //this.eliminarTarea = this.eliminarTarea.bind(this);
    this.onAgregarTareaAqui = this.onAgregarTareaAqui.bind(this);
  }

  eliminarTarea(index) {
    this.setState({
      tareas: this.state.tareas.filter((tarea,i)=>{
        if(i !== index){
          return tarea;
        }
      })
    })
  }


  editarTarea(index){
    
  }

  

  onAgregarTareaAqui(tarea){
    //1
    // const nuevasTareas = this.state.tareas;
    // nuevasTareas.push(tarea);
    // this.setState({
    //   tareas: nuevasTareas
    // });
    
    //2
    this.setState({
    tareas: [...this.state.tareas,tarea]
    });
  }

  render() {

    //algunas pruebas
    // console.log("antes de renderizar");
    // console.log(tareas);
    // const {x} = this.state;
    // console.log(x);

    const misTareas = this.state.tareas.map((tarea, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card text-white bg-dark">
            <img className="card-img-top" src="http://placehold.it/100x150/"></img>
            <div className="card-body">
              <h4 className="card-title">{tarea.titulo}</h4>
              <p className="card-text">{tarea.descripcion}</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.eliminarTarea.bind(this,i)}>
                Eliminar</button>
              <button className="btn btn-warning" onClick={this.editarTarea.bind(this,i)}>Editar</button>
            </div>
          </div>
        </div>
      )
    });

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a className="text-white" href="#">
            Tareas <span className="badge badge-pill badge-light ml-2">{misTareas.length}</span>
          </a>
        </nav>
        <div className="container">
          <div className="row mt-4 ">
            <div className="col md-4">
              <TareasForm onAgregarTareaDestino={this.onAgregarTareaAqui}/>
            </div>
            {misTareas}
          </div>
        </div>





        {
          /* como imprimir o usar variables
        {this.props.miVariable} se pueden usar mas de una*/
        }

      </div>
    );
  }
}

export default App;
