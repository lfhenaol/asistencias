import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import registerServiceWorker from './registerServiceWorker';

function Welcome(props) {
    return <h1>Hello, {props.name} {props.apellido}</h1>;
}


ReactDOM.render(<App/>,document.getElementById('root'));