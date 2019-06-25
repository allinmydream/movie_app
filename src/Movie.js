import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component{
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <MoviePoster />
            </div>  
        )
    }
}

class MoviePoster extends Component {
    render() {
        return(
            <img scr="https://pixel.nymag.com/imgs/daily/vulture/2019/05/24/aladdin-genies/24-aladdin-genies-lee.w700.h700.jpg" alt=""></img>
        )
    }
}

export default Movie;