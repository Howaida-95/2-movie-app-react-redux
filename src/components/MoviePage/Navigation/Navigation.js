import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';
const navigation = (props) => {
  return(
    <div className={classes.Navigation}>
      <div className={classes.NavigationContent}>
        <Link to='/'>
          <p>Home</p>
        </Link>
        <p>/</p>
        <p>{props.movie}</p>
      </div>
    </div>
  )
};

export default navigation;