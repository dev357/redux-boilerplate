import {combineReducers} from 'redux';

import {routerReducer as routing} from 'react-router-redux';
import counter from './modules/counter';

export default combineReducers({
  routing,
  counter
});