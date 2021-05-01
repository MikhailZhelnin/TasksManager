import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { openGroupModal } from '../../redux/actionCreators/groupActionCreator';

import GroupItem from './GroupItem/GroupItem';

import './GroupList.scss';

const GroupList = () => {
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.groups.groups);

  return (
    <div className="groupList">
      <div className="container">
        <div className="groupList__wrapper">
          <button className="groupList__btn" onClick={() => dispatch(openGroupModal())}>
            Add group
          </button>
          <div className="groupList__list">
            {groups.map((group) => (
              <GroupItem key={group.id} {...group} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupList;
