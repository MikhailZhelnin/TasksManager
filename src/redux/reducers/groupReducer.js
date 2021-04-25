import * as actionTypes from '../types/types';

const initialState = {
  groups: [],
  tasks: [],
  groupsModalOpen: false,
};

const groups = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_GROUP:
      const newGroup = {
        id: action.payload.id,
        name: action.payload.name,
        changedName: action.payload.changedName,
        timeOfCreating: action.payload.timeOfCreating,
      };
      return {
        ...state,
        groups: [...state.groups, newGroup],
      };
    case actionTypes.OPEN_GROUP_NAME_EDIT:
      return {
        ...state,
        groups: state.groups.map((group) =>
          group.id === action.payload ? { ...group, changedName: true } : group,
        ),
      };
    case actionTypes.CLOSE_GROUP_NAME_EDIT:
      return {
        ...state,
        groups: state.groups.map((group) =>
          group.id === action.payload ? { ...group, changedName: false } : group,
        ),
      };
    case actionTypes.EDIT_GROUP_NAME:
      return {
        ...state,
        groups: state.groups.map((group) =>
          group.id === action.payload.id ? { ...group, name: action.payload.name } : group,
        ),
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
