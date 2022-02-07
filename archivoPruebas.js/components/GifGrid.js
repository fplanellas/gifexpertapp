import React from 'react'
import useFechGifs from '../hooks/useFechGifs'
import GifGridItem from './GifGridItem';



const GifGrid = ({category}) => {

        const { data:images, loading } = useFechGifs( category );


    return (
        <>
            <h3>{ category }</h3>

            { loading && <p>Loading</p> }

            <div className='card-grid'>           
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
        
    )
}

export default GifGrid
