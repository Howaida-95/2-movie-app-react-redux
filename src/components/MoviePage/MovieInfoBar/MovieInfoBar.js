import React from 'react';
import classes from './MovieInfoBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {calcTime, convertMoney} from '../../../utility/helper';
const movieInfoBar = (props) => {
  return (
    <div className={classes.MovieInfoBar}>
      <div className={classes.InfoBarContent}>
{/* first col */}        
        <div className={classes.InfoBarContentCol}>
          <FontAwesomeIcon className={classes.TimeIcon} icon='clock' size='2x'/>
          <span className={classes.MovieInfoBarInfo}> Running time: {calcTime(props.time)}</span>
        </div>
{/* second col */}
        <div className={classes.InfoBarContentCol}>
          <FontAwesomeIcon className={classes.MoneyIcon} icon='money-bill-alt' size='2x'/>
          <span className={classes.MovieInfoBarInfo}> Budget: {convertMoney(props.budget)}</span>
        </div>
{/* third column */}          
        <div className={classes.InfoBarContentCol}>
          <FontAwesomeIcon className={classes.TicketIcon} icon='ticket-alt' size='2x'/>
          <span className={classes.MovieInfoBarInfo}> Revenue: {convertMoney(props.revenue)}</span>
        </div>
      </div>
    </div>
  );
}

export default movieInfoBar;