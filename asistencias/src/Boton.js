import React, {Component} from 'react';

export const Boton = ({ nombre, onClick, type }) => (
    <button type={type} className="waves-effect waves-light btn" onClick={onClick}>
        <i className="material-icons left">cloud</i>
        {nombre}
    </button>
);

/*export class Boton extends Component{
    render() {
        return (
            <button type="submit" className="waves-effect waves-light btn">
                <i className="material-icons left">cloud</i>
                {this.props.nombre}
            </button>
        );
    }
}*/

Boton.defaultProps = {
    nombre: 'Soy un bello botón'
};