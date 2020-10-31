import React from 'react';
import Rating from '../Rating/Rating';
import './MovieCard.css';

function MovieCard({item}) {
    
    return (
        <div className='bloc'>
            <img src={item.posterUrl} alt={item.title} />
            <div className='info'>
                <h4>{item.title}</h4>
                <span><Rating searchrate={item.rate}/></span>
            </div>
            <div className="descrip">
                <h3>SUMMARY</h3>
                <p>{item.description}</p>
            </div>


        </div>
    )
}

export default MovieCard
