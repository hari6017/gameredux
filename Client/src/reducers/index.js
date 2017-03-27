import Games from './Gameslist.js';

import {combineReducers} from 'redux';

const allReducers = combineReducers({

  Games : Games,

});

export default allReducers;
