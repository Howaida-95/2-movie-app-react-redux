import React from 'react';
import classes from './FourColGrid.module.css';
import PropTypes from 'prop-types';
const fourGrid = (props) => {
// here we get thumbnail as children & make array of element that we show in grid 
  let gridElements;
    if(props.children){
      gridElements = props.children.map( (element, i) => (
        <div key={i} className={classes.Element}>
          {element}
        </div>
      ))
    }
  return(
    <div>
{/* this header only be shown only when we do a search & show the most popular movies 
so we'll check this if we have header & if we not loading anything */}   
      {props.header && !props.loading ? <h1>{props.header}</h1>: null}  
      <div className={classes.Content}>{gridElements}</div> 
    </div>
  );
};
export default fourGrid;
fourGrid.propTypes = {
  header: PropTypes.string,
  loading: PropTypes.bool
}