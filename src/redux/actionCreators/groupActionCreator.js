import * as actionTypes from '../types/types';

export const addGroupAction = (newGroup) => {
  return {
    type: actionTypes.ADD_GROUP,
    payload: newGroup,
  };
};

export const deleteGroupAction = (idGroup) => {
  return {
    type: actionTypes.DELETE_GROUP,
    payload: idGroup,
  };
};

export const openGroupModal = () => {
  return {
    type: actionTypes.OPEN_GROUP_MODAL,
  };
};

export const closeGroupModal = () => {
  return {
    type: actionTypes.CLOSE_GROUP_MODAL,
  };
};

export const addTask = (newTask) => {
  return {
    type: actionTypes.ADD_TASK,
    payload: newTask,
  };
};

export const checkTask = (idTask) => {
  return {
    type: actionTypes.CHECK_TASK,
    payload: idTask,
  };
};

export const deleteTask = (idTask) => {
  return {
    type: actionTypes.DELETE_TASK,
    payload: idTask,
  };
};
