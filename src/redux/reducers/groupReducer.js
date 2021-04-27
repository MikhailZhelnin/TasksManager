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
        backgroundColor: action.payload.backgroundColor,
        changedName: action.payload.changedName,
        changedBackgroundColor: action.payload.changedBackgroundColor,
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
    case actionTypes.OPEN_GROUP_COLOR_EDIT:
      return {
        ...state,
        groups: state.groups.map((group) =>
          group.id === action.payload
            ? { ...group, changedBackgroundColor: !group.changedBackgroundColor }
            : group,
        ),
      };
    case actionTypes.CLOSE_GROUP_COLOR_EDIT:
      return {
        ...state,
        groups: state.groups.map((group) =>
          group.id === action.payload ? { ...group, changedBackgroundColor: false } : group,
        ),
      };
    case actionTypes.EDIT_GROUP_COLOR:
      return {
        ...state,
        groups: state.groups.map((group) =>
          group.id === action.payload.id
            ? { ...group, backgroundColor: action.payload.color }
            : group,
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
    case actionTypes.OPEN_TASK_MODAL:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, actionsModalOpen: !task.actionsModalOpen } : task,
        ),
      };
    case actionTypes.CLOSE_TASK_MODAL:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, actionsModalOpen: false } : task,
        ),
      };
    case actionTypes.ADD_TASK_PHOTO:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.idTask ? { ...task, photo: action.payload.photo } : task,
        ),
      };
    default:
      return state;
  }
};

export default groups;
