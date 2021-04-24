import * as actionTypes from '../types/types';

export const selectBackground = (img) => {
  return {
    type: actionTypes.SELECT_BACKGROUND,
    payload: img,
  };
};

export const openBackModal = () => {
  return {
    type: actionTypes.OPEN_BACKGROUND_MODAL,
  };
};

export const closeBackModal = () => {
  return {
    type: actionTypes.CLOSE_BACKGROUND_MODAL,
  };
};
