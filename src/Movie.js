import React, {Component} from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

function Movie({title, poster}) {
    return(
        <div>
            <h1>{title}</h1>
            <MoviePoster poster={poster} />
        </div> 
    )
}

function MoviePoster({poster}) {
    return (
        <img src={poster} alt="Movie Poster"></img>
    )
}

Movie.prototype = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
}

MoviePoster.prototype = {
    poster: PropTypes.string.isRequired
}

export default Movie;