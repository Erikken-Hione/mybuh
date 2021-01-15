import { combineReducers } from 'redux';
import dataReducer from './dataReducer';

const allReducer = combineReducers({
   data: dataReducer
})

export default allReducer;