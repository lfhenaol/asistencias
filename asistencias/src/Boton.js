import React, {Component} from 'react';

export class Boton extends Component{
    render() {
        return (
            <a className="waves-effect waves-light btn">
                <i className="material-icons left">cloud</i>
                {this.props.nombre}
            </a>
        );
    }
}

Boton.defaultProps = {
    nombre: 'Soy un bello botón'
};