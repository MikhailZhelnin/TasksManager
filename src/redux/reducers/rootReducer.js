import { combineReducers } from 'redux';
import groups from './groupReducer';
import theme from './themeReducer';
import background from './backgroundReducer';

const rootReducer = combineReducers({ groups, theme, background });

export default rootReducer;
