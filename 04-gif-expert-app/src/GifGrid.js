import React, { useState, useEffect } from 'react'
import CardGridItem from './CardGridItem';
import { GifGridItem } from './GifGridItem';
import getGifs from  './helpers/GetGifList';


// custom css
import './index.css';



export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    /**
     * useEffecto en el que se usa el Component GetGifList
     * Este es retornado como una promesa, por lo que se debe utilizar then.
     */

    /**
     * useEffect hace que el funcionamiento se realiza solo una vez. 
     * Si tenemos una petición, la va a realizar cada vez que se le de funcionalidad pero
     * al resto del codigo solo lo ejecutará una vez.
     * 
     * En este caso se ejecutará este código cuando la categoría cambie.
     */
    useEffect(() => {
        getGifs(category)
        .then(imgs => setImages( imgs ))
    }, [category]);

    return (
        <>
        <h3>{category}</h3>
        <div className="cardGrid">
            
            {
                images.map( img => (
                    // <GifGridItem
                    //     key={img.id}
                    //     {...img}
                        
                    // />
                    <CardGridItem className="card"
                        key={img.id}
                        {...img}
                    />
                ))
            }
        </div>
        </>
    )
}


