import React, { Component } from 'react';
import {FormularioRegistroUsuario} from "./FormularioRegistroUsuario";
import {Boton} from "./Boton";

export class RegistroUsuario extends Component {
    constructor(props){
        super(props);
        this.state = {
            codigo: '',
            nombreUno: '',
            nombreDos: '',
            apellidoUno: '',
            apellidoDos: '',
            telefono: '',
            correo: ''
        };
    }
    render() {
        return (
            <div>
                <h2>Registro de usuarios</h2>
                <FormularioRegistroUsuario/>
                <Boton nombre="Aceptar"/>
            </div>
        );
    }
}