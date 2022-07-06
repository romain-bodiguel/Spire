import { combineReducers } from 'redux';

import stationsReducer from './stations';
import userReducer from './user';

const rootReducer = combineReducers({
  stations: stationsReducer,
  user: userReducer,
});

export default rootReducer;
