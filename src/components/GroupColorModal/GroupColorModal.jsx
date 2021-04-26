import React from 'react';
import { useDispatch } from 'react-redux';

import { editGroupColor, closeGroupColorEdit } from '../../redux/actionCreators/groupActionCreator';

import { groupBackColors } from '../../utils/groupBackgroundColors';

import './GroupColorModal.css';

const GroupColorModal = ({ id, backgroundColor }) => {
  const dispatch = useDispatch();

  const selectcolorHandler = (color, id) => {
    dispatch(editGroupColor(color, id));
    dispatch(closeGroupColorEdit(id));
  };

  return (
    <div className="groupColarModal">
      {groupBackColors.map((color, index) => (
        <div
          key={index}
          className="groupColarModal__color"
          onClick={(e) => selectcolorHandler(e.target.style.backgroundColor, id)}
          style={{ background: color }}></div>
      ))}
    </div>
  );
};

export default GroupColorModal;
