// funtional components
import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import NavBar from './NavBar';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';




const PrimeraApp = ({name, subtitulo})=>{

    return(
        <Fragment>            
            <NavBar></NavBar>            
                <h1>{name}</h1>                            
                <p>{subtitulo}</p>
                <Button variant="contained" color="primary">Ingresar</Button>
            
        </Fragment>
    );
}

PrimeraApp.propTypes={
    name: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    name: 'Nombre del proyecto/emprendimiento',
    subtitulo: 'H2 de la página'
}

export default PrimeraApp;