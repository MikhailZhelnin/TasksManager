import { combineReducers } from 'redux';
import groups from './groupReducer';
import background from './backgroundReducer';

const rootReducer = combineReducers({ groups, background });

export default rootReducer;
