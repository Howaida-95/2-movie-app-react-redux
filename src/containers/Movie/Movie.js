import React, {Component} from 'react';
import classes from './Movie.module.css';
import Navigation from './../../components/MoviePage/Navigation/Navigation';
import MovieInfo from './../../components/MoviePage/MovieInfo/MovieInfo';
import MovieInfoBar from './../../components/MoviePage/MovieInfoBar/MovieInfoBar';
import Actor from '../../components/MoviePage/Actor/Actor';
import FourColGrid from '../../components/shared/FourColGrid/FourColGrid';
import Spinner from './../../components/UI/Spinner/Spinner';
import { connect } from 'react-redux';
import * as movieAction from '../../store/actions/index';
class Movie extends Component {
  componentDidMount(){
    this.props.onFetchMovie(this.props.movieId);
    this.props.onFetchCredits(this.props.movieId, this.props.movie)
  }
  render() {
    return (
      <div className={classes.Movie}>
{/* first we'll check if we have a movie on state 
=> here we can do another check about actors with movie ,but we prefer to check if movie found fist 
then an other check if actors there  */}        
        {this.props.movie?
          <div>
            <Navigation movie={this.props.movieName}/>
            <MovieInfo movie={this.props.movie} directors={this.props.directors}/>
            <MovieInfoBar 
              time={this.props.movie.runtime} 
              budget={this.props.movie.budget}
              revenue={this.props.movie.revenue}/>
          </div>
          :null}
{/* check if actors are there */}          
        {this.props.actors?
          <div className={classes.MovieGrid}>
            <FourColGrid header={this.props.actors?'Actors': 'No Actors Found'}>
              {this.props.actors.map((element, i)=> {
                return <Actor key={i} actor={element}/>
              })}
            </FourColGrid>
          </div>
        :null} 
{/* check if no movie found
we check if no actor so of course there's no movie & we're not loading 
because we don't want to show no movie found if we're loading */}          
        {!this.props.actors && !this.props.loading? <h1>No movie Found</h1>: null}
{/* we want to show spinner when we're loading */}
        {this.props.loading? <Spinner/> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.mv.movie,
    directors: state.mv.directors,
    actors: state.mv.actors,
    loading: state.mv.loading,
    error: state.mv.error,
    movieId: state.home.movieId,
    movieName: state.home.movieName
  }
}
const mapDispatchToProps = dispatch => {
  return{
    onFetchMovie: (movieId) => dispatch(movieAction.fetchMovie(movieId)),
    onFetchCredits: (movieId) => dispatch(movieAction.fetchCreditS(movieId)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Movie);