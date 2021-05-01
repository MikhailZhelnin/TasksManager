import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Masonry from 'react-masonry-css';

import { openGroupModal } from '../../redux/actionCreators/groupActionCreator';

import GroupItem from './GroupItem/GroupItem';

import './GroupList.scss';

const GroupList = () => {
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.groups.groups);

  const breakpoints = {
    default: 3,
    1024: 2,
    700: 1,
  };

  return (
    <div className="groupList">
      <div className="container">
        <div className="groupList__wrapper">
          <button className="groupList__btn" onClick={() => dispatch(openGroupModal())}>
            Add group
          </button>
          <Masonry
            breakpointCols={breakpoints}
            className="groupList__list-grid"
            columnClassName="groupList__list-grid_column">
            {groups.map((group) => (
              <GroupItem key={group.id} {...group} />
            ))}
          </Masonry>
        </div>
      </div>
    </div>
  );
};

export default GroupList;
