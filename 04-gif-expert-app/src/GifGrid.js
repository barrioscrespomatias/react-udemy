import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

const api_key = 'nXhYhkc0Cb99rokU9QGGFNgQpkDireAT';
const search = 'batman';
const url = `https://api.giphy.com/v1/gifs/search?q=${search}&limit=10&api_key=${api_key}`;


export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, []);


    const getGifs = async () => {

        const resp = await fetch(url);
        const { data } = await resp.json();
        const gifs = data.map((item) => {
            return {
                id: item.id,
                title: item.title,
                url: item.images.downsized_medium.url,
            }
        });
        console.log(gifs);
        setImages(gifs);
    }




    return (
        <div>
            <h3>{category}</h3>
            {
                images.map((image) => (
                    <GifGridItem
                        image={image}
                        key={image.id}
                    />
                ))
            }
        </div>
    )
}


