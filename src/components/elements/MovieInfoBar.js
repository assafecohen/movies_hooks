import React from 'react';

import fontawesome from 'react-fontawesome';
import { calcTime, convertMoney } from '../../helpers';

import { StyledMovieInfoBar } from '../styles/StyledMovieInfoBar';
import FontAwesome from 'react-fontawesome';

const MovieInfoBar = ({ time, budget, revenue }) => (
  <StyledMovieInfoBar>
    <div className='movieinfobar-content'>
      <div className='movieinfobar-content-col'>
        <FontAwesome className='fa-time' name='clock-o' size='x2' />
        <span className='movieinfobar-info'>
          Running time: {calcTime(time)}
        </span>
      </div>
      <div className='movieinfobar-content-col'>
        <FontAwesome className='fa-budget' name='money' size='x2' />
        <span className='movieinfobar-info'>
          Budget: {convertMoney(budget)}
        </span>
      </div>
      <div className='movieinfobar-content-col'>
        <FontAwesome className='fa-revenue' name='ticket' size='x2' />
        <span className='movieinfobar-info'>
          Revenue: {convertMoney(revenue)}
        </span>
      </div>
    </div>
  </StyledMovieInfoBar>
);

export default MovieInfoBar;
