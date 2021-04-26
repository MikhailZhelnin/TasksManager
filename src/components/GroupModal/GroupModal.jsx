import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addGroupAction, closeGroupModal } from '../../redux/actionCreators/groupActionCreator';

import './GroupModal.css';

const GroupModal = () => {
  const dispatch = useDispatch();
  const [groupName, setGroupName] = useState('');

  const createGroup = () => {
    if (groupName === '') {
      return false;
    }
    const id = new Date().getTime().toString();
    const name = groupName;
    const changedName = false;
    const timeOfCreating = Date.now();
    dispatch(addGroupAction(id, name, changedName, timeOfCreating));
    setGroupName('');
    dispatch(closeGroupModal());
  };

  const handleClick = (e) => {
    if (e.target.classList.contains('groupModal')) {
      dispatch(closeGroupModal());
    }
  };

  return (
    <div className="groupModal" onClick={handleClick}>
      <div className="groupModal__wrapper">
        <input
          type="text"
          className="groupModal__input"
          autoFocus
          placeholder="Enter group name..."
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
        <button className="groupModal__btn" onClick={createGroup}>
          add group
        </button>
        <button className="groupModal__btn-close" onClick={() => dispatch(closeGroupModal())}>
          close
        </button>
      </div>
    </div>
  );
};

export default GroupModal;
