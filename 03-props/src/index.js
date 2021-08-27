import React from 'react';
import ReactDom from 'react-dom';
import PrimeraApp from './PrimeraApp';

// const saludo = <h1>Hola mundos!</h1>;

const divRoot = document.querySelector('#root');

ReactDom.render(<PrimeraApp></PrimeraApp>,divRoot);