import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'



const GifExpertApp = props => {

    const [category, setCategory] = useState(['Dragon ball','Caballeros del zodíaco','Tortugas ninjas']);

    const handleAdd = ()=>{
        setCategory( (beforeCategory)=>[...category, 'Power Rangers']);
    }

    console.log(category);

    return (
    <Fragment>
        <h2>GifExpertApp</h2>
        <hr></hr>

        <ol>
            {
                category.map((item)=>{
                    return <li key={item}>{item}</li>
                })
            }
        </ol>

        <button onClick={handleAdd}>Add</button>
    </Fragment>
    )

    
}

GifExpertApp.propTypes = {

}

export default GifExpertApp;
