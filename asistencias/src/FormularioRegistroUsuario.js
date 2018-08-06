import React, {Component} from 'react';

export class FormularioRegistroUsuario extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="codigo" type="text" className="validate"/>
                            <label htmlFor="codigo">Cédula</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="primer_nombre" type="text" className="validate"/>
                            <label htmlFor="primer_nombre">Primer Nombre</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="segundo_nombre" type="text" className="validate"/>
                            <label htmlFor="segundo_nombre">Segundo Nombre</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="primer_apellido" type="text" className="validate"/>
                            <label htmlFor="primer_apellido">Primer Apellido</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="segundo_apellido" type="text" className="validate"/>
                            <label htmlFor="segundo_apellido">Segundo Apellido</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="email" type="email" className="validate"/>
                            <label htmlFor="email">Correo</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="telefono" type="text" className="validate"/>
                            <label htmlFor="telefono">Teléfono</label>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


