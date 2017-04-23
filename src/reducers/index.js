import { combineReducers } from 'redux';
import LeftbarReducer from './reducer_leftbar';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  leftbar: LeftbarReducer,
});

export default rootReducer;
