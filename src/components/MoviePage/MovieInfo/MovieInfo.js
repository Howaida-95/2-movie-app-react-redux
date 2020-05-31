import React from 'react';
import classes from './MovieInfo.module.css';
import {IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE} from '../../../utility/config'// because we use image here 
import noImage from '../../../assets/images/no_image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MovieThumb from '../../shared/MovieThumb/MovieThumb';
const movieInfo = (props) => {
  return (
// we do inline style here to check if we have background otherwise set it to black     
    <div className={classes.MovieInfo}
      style = {{
        background: props.movie.backdrop_path 
        ?`url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.movie.backdrop_path}')`
        : '#000'
      }}>
        <div className={classes.InfoContent}>
          <div className={classes.InfoThumb}>
            <MovieThumb
/*we do a check here if we have a poster path , if we don't have that so we don't have image for this one then we show no-image poster we have */           
              image={props.movie.poster_path 
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.movie.poster_path}`
                :`${noImage}`}
              clickable={false}/>
          </div>

          <div className={classes.InfoText}>
            <h1>{props.movie.title}</h1>
            <h3>Plot</h3>
            <p>{props.movie.overview}</p>
            <h3>IMDB RATING</h3>
            <div className={classes.RmdbRating}>
              <meter min='0' max='100' optimum='100' low='40' high='70' value={props.movie.vote_average * 10}></meter>
              <p className={classes.RmdbScore}>{props.movie.vote_average}</p>
            </div>
{/* check if director > 1 then we should say directors , if = 1 then we should say director */} 
            {props.directors.length > 1? <h3>DIRECTORS</h3>: <h3>Director</h3>}  
{/* use map method in directors array to create elements for each director 
ex here we return p for each director */}   
            {props.directors.map((element, i) => {
              return <p key={i} className={classes.Director}>{element.name}</p>
            })}
          </div>

          <FontAwesomeIcon className={classes.Icon} icon='film' size='5x'/>
        </div>
    </div>
  );
}

export default movieInfo;