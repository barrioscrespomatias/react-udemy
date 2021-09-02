import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types';

export const CategoryAdd = ({ setCategory= ()=> 'Se debe pasar una funcion'}) => {

    const [inputValue, setInputValue] = useState('');

    const handleFormSubmit = (e)=>{
        e.preventDefault();    
        
        if (inputValue.trim().length > 2) {
            setCategory( cats => [inputValue, ...cats]);       
            setInputValue('');
        }      
        
    }

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    return (
        <Fragment>
            <h2>{inputValue}</h2>
            <form onSubmit={handleFormSubmit}>
                <input onChange={handleInputChange}></input>
            </form>
        </Fragment>
    )
}

CategoryAdd.propTypes={
    setCategory: PropTypes.func.isRequired,
}
