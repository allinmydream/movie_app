import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';

function Movie({title, poster, genres, synopsis}) {
    return(
        <div className="Movie">
            <div className="Movie__Columns">
            <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className="Movie__Synopsis">               
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis=' ...'
                    trimRight
                    basedOn='letters'
                />
                </p>
            </div>
        </div> 
    )
}

function MoviePoster({poster, alt}) {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"></img>
    )
}

function MovieGenre({genre}) {
    return(
        <span className="Movie__Genre">{genre} </span>
    )
}

Movie.prototype = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
    synopsis : PropTypes.string.isRequired
}

MoviePoster.prototype = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.prototype = {
    genres: PropTypes.string.isRequired
}

export default Movie;