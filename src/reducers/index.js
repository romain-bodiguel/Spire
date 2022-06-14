import { combineReducers } from 'redux';

import stationsReducer from './stations';
import userReducer from './user';

const rootReducer = combineReducers({
  spots: stationsReducer,
  user: userReducer,
});

export default rootReducer;
