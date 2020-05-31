import React from 'react';
import classes from './MainImage.module.css';
const mainImage = (props) => {
  return (
    <div className={classes.MainImage}
    style={{
      background:// the one thing we export here is url(props.image)image here & gradient for text to be readable
        `linear-gradient(to bottom, rgba(0,0,0,0)39%,
        rgba(0,0,0,0)41%,
        rgba(0,0,0,0.65)100%),
        url('${props.image}'), #1c1c1c`
    }}>
      <div className={classes.Content}>
        <div className={classes.Text}>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}
export default mainImage;