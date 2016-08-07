import {combineReducers} from 'redux';

import {routerReducer as routing} from 'react-router-redux';
import counter from './modules/counter';
import sidebar from './modules/sidebar';

export default combineReducers({
  routing,
  sidebar,
  counter
});
