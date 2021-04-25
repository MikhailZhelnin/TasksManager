import * as actionTypes from '../types/types';

export const addGroupAction = (id, name, changedName, timeOfCreating) => {
  return {
    type: actionTypes.ADD_GROUP,
    payload: {
      id,
      name,
      changedName,
      timeOfCreating,
    },
  };
};

export const deleteGroupAction = (idGroup) => {
  return {
    type: actionTypes.DELETE_GROUP,
    payload: idGroup,
  };
};

export const openGroupNameEdit = (id) => {
  return {
    type: actionTypes.OPEN_GROUP_NAME_EDIT,
    payload: id,
  };
};

export const closeGroupNameEdit = (id) => {
  return {
    type: actionTypes.CLOSE_GROUP_NAME_EDIT,
    payload: id,
  };
};

export const editGroupName = (name, id) => {
  return {
    type: actionTypes.EDIT_GROUP_NAME,
    payload: {
      name,
      id,
    },
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
