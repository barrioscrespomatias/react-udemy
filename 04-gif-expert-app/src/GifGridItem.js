import React from 'react'

export const GifGridItem = ({id, title, url}) => {

    // console.log(props)
    return (
        <div>
            <img src={ url } alt= { title } width={300} height={150}></img>                              
            <p> { title } </p>
        </div>
    )
}
