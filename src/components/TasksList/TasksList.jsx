import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { checkTask, deleteTask } from '../../redux/actionCreators/groupActionCreator';

import { MdClose, MdCheck } from 'react-icons/md';

import './TasksList.css';

const TasksList = (props) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.groups.tasks);

  return (
    <div className="tasksList">
      {tasks.map((item) =>
        item.groupId === props.id ? (
          <div key={item.id} className="tasksList__item">
            <span
              className={
                item.isCompleted
                  ? 'tasksList__item-name tasksList__item-name__completed'
                  : 'tasksList__item-name '
              }>
              {item.name}
            </span>
            <MdCheck className="tasksList__item-btn" onClick={() => dispatch(checkTask(item.id))} />

            <MdClose
              className="tasksList__item-btn"
              onClick={() => dispatch(deleteTask(item.id))}
            />
          </div>
        ) : (
          ''
        ),
      )}
    </div>
  );
};

export default TasksList;
