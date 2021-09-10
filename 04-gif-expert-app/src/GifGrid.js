import React, { useState, useEffect } from 'react'
import { useFetchGifts } from './hooks/useFetchGifts';
import  CardGridItem  from "./CardGridItem";

import './index.css';

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifts(category);


    return (
        <>
            <h3>{category}</h3>

            {loading && <p>loading...</p>}

            <div className="cardGrid">
                {
                    images.map(img=>(
                        <CardGridItem
                            key={img.id}
                            {...img}>
                        </CardGridItem>
                    ))
                }
            </div>
        </>
    )
}


