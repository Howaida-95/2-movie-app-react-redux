import React from 'react';
import classes from './LoadMoreBtn.module.css';
const loadMoreBtn = (props) => {
  return (
    <div className={classes.LoadMoreBtn} onClick={props.clicked}>
      <p>Load More</p>
    </div>
  );
}

export default loadMoreBtn;