import * as actionTypes from '../types/types';

import { dataImages } from '../../utils/background';

const initialState = {
  selectedBackground: dataImages[17].img,
  backgroundModalOpen: false,
};

const background = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_BACKGROUND_MODAL:
      return {
        ...state,
        backgroundModalOpen: true,
      };
    case actionTypes.CLOSE_BACKGROUND_MODAL:
      return {
        ...state,
        backgroundModalOpen: false,
      };
    case actionTypes.SELECT_BACKGROUND:
      return {
        ...state,
        selectedBackground: action.payload,
      };
    default:
      return state;
  }
};

export default background;
