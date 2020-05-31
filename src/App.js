import React ,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/shared/Header/Header';
import Home from './containers/Home/Home';
import Movie from './containers/Movie/Movie';
import NotFound from './components/NotFound/NotFound';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faFilm, faClock,faMoneyBillAlt, faTicketAlt} from '@fortawesome/free-solid-svg-icons'
library.add(faSearch, faFilm,faClock, faMoneyBillAlt, faTicketAlt )
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Header/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/:movieId' component={Movie}/>
            <Route componenet={NotFound}/>
          </Switch>
        </> 
      </BrowserRouter>
    );
  }
}

export default App;