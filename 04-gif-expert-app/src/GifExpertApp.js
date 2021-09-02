import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { CategoryAdd } from './CategoryAdd';
import { GifGrid } from './GifGrid';



const GifExpertApp = props => {

    const [category, setCategory] = useState(['Dragon ball']);

    /**
     * Set category pisa el estado actual del array donde se encuentran las categorias [category]. 
     * No se puede pisar directamente con un string ya que sino el objeto deja de ser un array y pasa a ser un strting
     * 
     */
    const handleAdd = () => {
        setCategory((cats) => [...cats, 'Power Rangers']);
    }

    console.log(category);

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <hr></hr>

            {/* 
        Se utiliza cono id el item actual de la categoría. Esto tira un error si quisiera
        agregar nuevamente el mismo elemento al array ya que no se podrían definir dos 
        elementos con el mismo ID.
        Se soluciona tomando el ID de la base de datos, o de la API */}

            {/* <ol>
            {
                category.map((item)=>{
                    return <li key={item}>{item}</li>
                })
            }
        </ol>
         */}

            <ol>
                {
                    category.map((category) => (
                        <GifGrid
                            category={category}
                            key={category}
                        />)
                    )
                }
            </ol>

            <CategoryAdd setCategory={setCategory}></CategoryAdd>
            {/* <CategoryAdd ></CategoryAdd> */}

        </Fragment>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp;
