import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TaskModal from '../TaskModal/TaskModal';

import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoCloseSharp } from 'react-icons/io5';

import { openTaskModal, deleteTaskPhoto } from '../../redux/actionCreators/groupActionCreator';

import './TasksList.scss';

const TasksList = (props) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.groups.tasks);

  return (
    <div className="tasksList">
      {tasks.map((item) =>
        item.groupId === props.id ? (
          <div key={item.id} className="tasksList__item">
            {item.photo ? (
              <div className="tasksList__item-header">
                <img src={item.photo} alt="task img" />
                <IoCloseSharp
                  className="tasksList__item-header__btnDelete"
                  onClick={() => dispatch(deleteTaskPhoto(item.id, false))}
                />
              </div>
            ) : null}

            <div className="tasksList__item-main">
              <div className="tasksList__item-content">
                <span
                  className={
                    item.isCompleted
                      ? 'tasksList__item-name tasksList__item-name__completed'
                      : 'tasksList__item-name '
                  }>
                  {item.name}
                </span>
              </div>
              <div className="tasksList__item-actions">
                <BsThreeDotsVertical
                  className="tasksList__item-actions__icon"
                  onClick={() => dispatch(openTaskModal(item.id))}
                />
                {item.actionsModalOpen ? <TaskModal taskId={item.id} /> : null}
              </div>
            </div>
          </div>
        ) : (
          ''
        ),
      )}
    </div>
  );
};

export default TasksList;
