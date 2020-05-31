import React from 'react';
import classes from './Actor.module.css';
import {IMAGE_BASE_URL} from '../../../utility/config';
import noImage from '../../../assets/images/no_image.jpg';
const actor = (props) => {
  const POSTER_SIZE = 'w154';
  return (
    <div className={classes.Actor}>
      <img 
        alt='actorThumb'  
        src={props.actor.profile_path
          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.actor.profile_path}`
          : `${noImage}`} />
      <div className={classes.ActorInfo}>
        <p className={classes.ActorName}>{props.actor.name}</p>  
        <p className={classes.ActorCharacter}>{props.actor.character}</p>  
      </div>    
    </div>
  );
}

export default actor;