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


