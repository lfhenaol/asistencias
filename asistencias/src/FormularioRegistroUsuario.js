import React, {Component} from 'react';
import {Boton} from "./Boton";

export class FormularioRegistroUsuario extends Component {
    constructor(props){
        super(props);
        this.state = {
            codigo: '',
            primer_nombre: '',
            segundo_nombre: '',
            primer_apellido: '',
            segundo_apellido: '',
            email: '',
            telefono: ''
        }
    }

    saveToText = (e) => {
        e.preventDefault();
        const content = this.state;
        const a = document.createElement("a");
        const file = new Blob([JSON.stringify(content)], {type: 'text/plain'});
        a.href = URL.createObjectURL(file);
        a.download = 'save.txt';
        a.click();
    };

    onChange = (e) => {
        const { value, id } = e.target;
        this.setState({ [id]: value });
    };

    render(){
        const {
            codigo,
            primer_nombre,
            segundo_nombre,
            primer_apellido,
            segundo_apellido,
            email,
            telefono,
        } = this.state;

        return(
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="codigo" type="text" className="validate" value={codigo} onChange={this.onChange} required/>
                            <label htmlFor="codigo">Cédula</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="primer_nombre" type="text" className="validate" value={primer_nombre} onChange={this.onChange} required/>
                            <label htmlFor="primer_nombre">Primer Nombre</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="segundo_nombre" type="text" className="validate" value={segundo_nombre} onChange={this.onChange} />
                            <label htmlFor="segundo_nombre">Segundo Nombre</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="primer_apellido" type="text" className="validate" value={primer_apellido} onChange={this.onChange} required/>
                            <label htmlFor="primer_apellido">Primer Apellido</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="segundo_apellido" type="text" className="validate" value={segundo_apellido} onChange={this.onChange} />
                            <label htmlFor="segundo_apellido">Segundo Apellido</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="email" type="email" className="validate" value={email} onChange={this.onChange} required/>
                            <label htmlFor="email">Correo</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="telefono" type="text" className="validate" value={telefono} onChange={this.onChange}/>
                            <label htmlFor="telefono">Teléfono</label>
                        </div>
                    </div>
                    <Boton nombre="Aceptar" onClick={this.saveToText} type='submit'/>
                </form>
            </div>
        );
    }
}


