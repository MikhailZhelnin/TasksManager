import * as actionTypes from '../types/types';

const initialState = {
  groups: [],
  tasks: [],
  groupsModalOpen: false,
};

const groups = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_GROUP:
      return {
        ...state,
        groups: [...state.groups, action.payload],
      };
    case actionTypes.DELETE_GROUP:
      return {
        ...state,
        groups: state.groups.filter((group) => group.id !== action.payload),
        tasks: state.tasks.filter((task) => task.groupId !== action.payload),
      };
    case actionTypes.OPEN_GROUP_MODAL:
      return {
        ...state,
        groupsModalOpen: true,
      };
    case actionTypes.CLOSE_GROUP_MODAL:
      return {
        ...state,
        groupsModalOpen: false,
      };
    case actionTypes.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case actionTypes.CHECK_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, isCompleted: !task.isCompleted } : task,
        ),
      };
    case actionTypes.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export default groups;
