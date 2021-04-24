import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { checkTask, deleteTask } from '../../redux/actionCreators/groupActionCreator';

import './TasksList.css';

const TasksList = (props) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.groups.tasks);

  return (
    <div className="tasksList">
      {tasks.map((item) =>
        item.groupId === props.id ? (
          <div key={item.id} className="tasksList__item">
            <span className="tasksList__item-name">{item.name}</span>
            <button
              className="tasksList__item-check__btn"
              onClick={() => dispatch(checkTask(item.id))}>
              check
            </button>
            <button
              className="tasksList__item-check__delete"
              onClick={() => dispatch(deleteTask(item.id))}>
              del
            </button>
          </div>
        ) : (
          ''
        ),
      )}
    </div>
  );
};

export default TasksList;
