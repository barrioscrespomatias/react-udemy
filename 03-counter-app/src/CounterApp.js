import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button'; 


const CounterApp = ({value})=>{

    const [counter, setCounter] = useState(value);


    const handleAdd = ()=>{
        setCounter(counter + 1);
    }

    const handleSubstract = ()=>{
        setCounter(counter - 1);
    }

    const handleReset = ()=>{
        setCounter(value);
    }

    return(
        <Fragment>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <Button onClick= {handleAdd} variant="contained" color="primary">+1</Button>
            <Button onClick= {handleReset} variant="contained" color="primary">Reset</Button>
            <Button onClick= {handleSubstract} variant="contained" color="primary">-1</Button>
        </Fragment>
    )

};

CounterApp.propTypes={
    value: PropTypes.number
}

export default CounterApp;
