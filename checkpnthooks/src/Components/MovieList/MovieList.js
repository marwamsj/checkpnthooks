import React from 'react';
import './MovieList.css';
import MovieCard from "../MovieCard/MovieCard";


function MovieList({list,searchTerm,searchrate}) {
    return (
        <div className="drama">
             {list.filter(
          (el) =>
            el.title.toLowerCase().includes(searchTerm.toLowerCase()) && el.rate >= searchrate)
        .map((el) => (
          <MovieCard key={el.id} item={el} />
        ))}
        </div>
    )
}

export default MovieList;
