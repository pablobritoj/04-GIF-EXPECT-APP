
import React from 'react'
import { useFethGifs } from '../hooks/useFethGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

       
    const { data:imagenes } = useFethGifs(category)
    
    return (
        <>
            <h3 className='animate__animated animate__swing' >{category}</h3>
            
            { <div className='contenedorGrid' >
            {
                    imagenes.map( img =>(
                        <GifGridItem 
                        key={ img.id } 
                        {...img}
                        />
                    ))
                }
            </div> }
        </>
    )
}

