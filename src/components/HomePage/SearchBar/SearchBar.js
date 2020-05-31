import React from 'react';
import classes from './SearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* when the user types something in input we want to have full controll in that 
input field , so when the user types something we're gonna set our State to this value 
then we set the value in the input field to our state 
the input field will always have a value from state */
const searchBar = (props) => {
    return (
      <div className={classes.SearchBar}>
        <div className={classes.Content}>
          <FontAwesomeIcon className={classes.SearchIcon} icon='search' size='2x'/>
          <input 
            type='text'
            placeholder='search'
            onChange={props.changed}
            value={props.value}/>
        </div>
      </div>
    );
}

export default searchBar;