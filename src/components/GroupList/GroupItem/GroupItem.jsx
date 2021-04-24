import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTask, deleteGroupAction } from '../../../redux/actionCreators/groupActionCreator';

import TasksList from '../../TasksList/TasksList';

import './GroupItem.css';

const GroupItem = ({ id, name }) => {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();

  const addNewTask = (id) => {
    if (taskName === '') {
      return false;
    }
    const newTask = {
      groupId: id,
      id: new Date().getTime().toString(),
      name: taskName,
      isCompleted: false,
    };
    dispatch(addTask(newTask));
    setTaskName('');
  };

  return (
    <div key={id} className="groupList__item">
      <header className="groupList__item-header">
        <h3 className="groupList__item-header__name">{name}</h3>
      </header>
      <main className="groupList__item-main">
        <TasksList id={id} />
      </main>
      <footer className="groupList__item-footer">
        <input
          type="text"
          className="groupList__item-footer__input"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button className="groupList__item-footer__btn" onClick={() => addNewTask(id)}>
          add task
        </button>
      </footer>
      <button className="groupList__item-deleteBtn" onClick={() => dispatch(deleteGroupAction(id))}>
        delete
      </button>
    </div>
  );
};

export default GroupItem;
