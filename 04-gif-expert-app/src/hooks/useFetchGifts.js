import React, { useState, useEffect } from 'react'
import getGifs, { GetGifs } from '../helpers/GetGifList';

export const useFetchGifts = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect (()=>{

        getGifs(category)
        

        .then(imgs =>{

            setTimeout(()=>{
                console.log(imgs)
                
                setState({
                    data: imgs,
                    loading: false,
                });
            },3000)            
        })


    }, [category]);

    // setTimeout( ()=>{
    //     setState({
    //         data: [1,2,3,4,5],
    //         loadgin: false,
    //     })
    // },3000);

    return state;
}
