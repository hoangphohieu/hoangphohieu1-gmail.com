// file này để combine các reducer lại
import { combineReducers } from 'redux';
import ItemReducer from './InputReducer';

export default combineReducers({
      items: ItemReducer,

})
