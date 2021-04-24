import { combineReducers } from 'redux';
import groups from './groupReducer';
import theme from './themeReducer';

const rootReducer = combineReducers({ groups, theme });

export default rootReducer;
