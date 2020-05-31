import React from 'react';
import classes from './MovieThumb.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const movieThumb = (props) => {
  return (
/* for moviethumb we have a prop called clickable , so we can decide by the prop setting to true or false 
if we want image to be clickable */    
    <div className={classes.MovieThumb} onClick={props.clicked}>
      {props.clickable 
/* the link will be base url + id, & we also send the moviename because we want to use this in navigation later */     
        ? <Link 
            to={{pathname: `/${props.movieId}`}}> 
              <img 
                className={classes.Clickable} 
                src={props.image} 
                alt='moviethumb'/>
          </Link>
        :<img src={props.image} alt='moviethumb'/>}
    </div>
  );
}

export default movieThumb;
movieThumb.propTypes = { // to recieve correct props 
  image: PropTypes.string,
  movieId: PropTypes.number,
  movieName: PropTypes.string
}