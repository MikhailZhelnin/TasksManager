import * as actionTypes from '../types/types';

const initialState = {
  theme: true,
};

const theme = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_THEME:
      return {
        ...state,
        theme: !state.theme,
      };
    default:
      return state;
  }
};

export default theme;
