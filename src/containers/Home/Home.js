import React, {Component} from 'react';
import classes from './Home.module.css';
import MainImage from '../../components/HomePage/MainImage/MainImage'; 
import SearchBar from '../../components/HomePage/SearchBar/SearchBar';
import FourColGrid from '../../components/shared/FourColGrid/FourColGrid';
import MovieThumb from '../../components/shared/MovieThumb/MovieThumb'
import noImage from '../../assets/images/no_image.jpg';
import Spinner from '../../components/UI/Spinner/Spinner';
import LoadMoreBtn from '../../components/HomePage/LoadMoreBtn/LoadMoreBtn';
import {connect} from 'react-redux';
import * as homeAction from '../../store/actions/index';
import {IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../../utility/config';
class Home extends Component {
  state = {
    searchValue:''
  }
  componentDidMount(){
    this.props.onFetchPopularMovies();
  }
  loadMoreItems = () => {
    this.props.onLoadMoreItems(this.state.searchValue, this.props.currentPage)
  }
  
  timeout = null ; 
  doSearch = (event) => {
    this.setState({searchValue: event.target.value})
/* we want to have a timeout because we don't want the search method to fire on evbery key stroke
so we wait half a second to see if the user have typed for example a whole word before we call a search 
=> when we type something we clear the timeout and the timeout will restart 
so we always have 0.5 sec when we start typing something before the search method will fire */     
    clearTimeout(this.timeout); // access the timeout prop 
// assign a new timeout , this will fire after  .5 sec after start typing something 
    this.timeout = setTimeout(() => {
      this.props.onSearchItems(this.state.searchValue);// searchItems will fire every time we do a search 
    }, 500);
  }
  render(){
    console.log(this.props.movies);
    let header = 'Popular Movies';
    if(this.props.searchValue && this.props.movies.length !== 0){
      header = 'Search Results'
    }
    if(this.props.movies.length === 0){
      header = 'No Movie Found';
    }
    return (
      <div className={classes.Home}>
{/* check if data loaded before rendering this , doing this by ternary expression 
so if it exist it'll show mainImage & searchbar otherwise it will show nothing */}  
        {this.props.mainImage
          ?<div>
            <MainImage
              image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.props.mainImage.backdrop_path}`}
              title={this.props.mainImage.original_title}
              text={this.props.mainImage.overview}/>
            <SearchBar 
              value={this.state.searchValue}
              changed={this.doSearch}/>
          </div>: null}    
        <div className={classes.Grid}>
          <FourColGrid
/* header will be shown based on if we do search or we showing popular movies 
so we check if we have a searchValue so we're doing search so we can have header ==> search results 
otherwise we show popular movies & we have a loading state if we're loading or not */        
            header={header}
            loading={this.props.loading}>
{/* here we sending moviesthumb by looping in movies like we did before */} 
            {this.props.movies.map( (element, i) => (
              <MovieThumb
                key={i}
                clickable={true}
/*we do a check here if we have a poster path , if we don't have that so we don't have image for this one then we show no-image poster we have */           
                image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}`:`${noImage}`}
                movieId ={element.id}
                clicked = {() => this.props.onGetMovieInfo(element.id, element.original_title)} />
            ))}
          </FourColGrid> 
{/* here we check if we loading something , if we gonna show spinner or not */}        
          {this.props.loading? <Spinner /> : null }
{/* we want to show the button if we're not at the last page, so we gonna check 
if the curren page is <= the total pages & we want to show spinner if we grapping something 
so we want to check if we loading something or not 
here we use () because we do 2 checks here */}
          {(this.props.currentPage < this.props.totalPages 
            && this.props.movies.length > 0
            && !this.props.loading )?
          <LoadMoreBtn clicked={this.loadMoreItems}/> : null}          
        </div>
      </div>  
    )
  }
}
const mapStateToProps = (state) => {
  return {
    movies: state.home.movies,
    mainImage: state.home.mainImage,
    loading: state.home.loading,
    currentPage: state.home.currentPage,
    totalPages: state.home.totalPages,
    error: state.home.error,
    movieId: state.home.movieId,
    movieName: state.home.movieName
  }
}
const mapDispatchToProps = dispatch => {
  return{
    onFetchPopularMovies: () => dispatch(homeAction.fetchPopularMovies()),
    onLoadMoreItems: (searchValue, currentPage) => dispatch(homeAction.loadMoreItems(searchValue, currentPage)),
    onSearchItems: (searchValue) => dispatch(homeAction.searchItems(searchValue)),
    onGetMovieInfo: (movieId, movieName) => dispatch(homeAction.getMovieInfo(movieId, movieName))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);