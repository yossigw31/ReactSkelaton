import {combineReducers} from 'redux';
//alias becouse it export to defualt
import courses from './courseReducer';

const rootReducer =  combineReducers({
  courses
});

export default rootReducer;
