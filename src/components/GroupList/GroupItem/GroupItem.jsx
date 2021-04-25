import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  addTask,
  deleteGroupAction,
  openGroupNameEdit,
  closeGroupNameEdit,
  editGroupName,
} from '../../../redux/actionCreators/groupActionCreator';

import { AiOutlineDelete } from 'react-icons/ai';
import { RiAddLine } from 'react-icons/ri';
import { VscEdit } from 'react-icons/vsc';
import { AiOutlineSave } from 'react-icons/ai';

import TasksList from '../../TasksList/TasksList';

import './GroupItem.css';

const GroupItem = ({ id, name, changedName, timeOfCreating }) => {
  const [taskName, setTaskName] = useState('');
  const [newName, setNewInputName] = useState(name);
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

  const editNameHandler = (name, id) => {
    dispatch(editGroupName(name, id));
    setNewInputName(name);
    dispatch(closeGroupNameEdit(id));
  };

  return (
    <div key={id} className="groupList__item">
      <header className="groupList__item-header">
        {changedName ? (
          <div className="groupList__item-header__changed-name">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewInputName(e.target.value)}
              autoFocus
            />
          </div>
        ) : (
          <h3 className="groupList__item-header__name">{name}</h3>
        )}
        {changedName ? (
          <AiOutlineSave
            className="groupList__item-header__btn"
            onClick={() => editNameHandler(newName, id)}
          />
        ) : (
          <VscEdit
            className="groupList__item-header__btn"
            onClick={() => dispatch(openGroupNameEdit(id))}
          />
        )}
        <AiOutlineDelete
          className="groupList__item-header__btn"
          onClick={() => dispatch(deleteGroupAction(id))}
        />
      </header>
      <main className="groupList__item-main">
        <TasksList id={id} />
        <div className="group__item-main__actions">
          <input
            type="text"
            className="groupList__item-main__actions-input"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Enter your task name..."
          />
          <RiAddLine className="groupList__item-main__actions-btn" onClick={() => addNewTask(id)} />
        </div>
      </main>
      <footer className="groupList__item-footer">
        <span className="groupList__item-footer__time">
          Added:{' '}
          {new Date(timeOfCreating).toLocaleDateString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>
      </footer>
    </div>
  );
};

export default GroupItem;
