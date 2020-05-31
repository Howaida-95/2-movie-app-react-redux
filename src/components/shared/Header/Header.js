import React from 'react';
import movieLogo from '../../../assets/images/reactMovie_logo.png';
import tmdbLogo from '../../../assets/images/tmdb_logo.png';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className={classes.Header}>
      <div className={classes.Content}>
        <Link to='/'>
          <img className={classes.MovieLogo} src={movieLogo} alt="movie-logo"/>
        </Link>
        <img className={classes.dbLogo}src={tmdbLogo} alt="tmdb-logo"/>
      </div>
    </header>
);
}
export default Header;