import React from 'react';
import { useDispatch } from 'react-redux';

import {
  closeBackModal,
  selectBackground,
} from '../../redux/actionCreators/backgroundActionCreator';

import { dataImages } from '../../utils/background';

import './BackgroundModal.scss';

const BackgroundModal = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    if (e.target.classList.contains('backgroundModal')) {
      dispatch(closeBackModal());
    }
  };

  const selectImageHandler = (img) => {
    dispatch(selectBackground(img));
    dispatch(closeBackModal());
  };

  return (
    <div className="backgroundModal" onClick={handleClick}>
      <div className="backgroundModal__wrapper">
        {dataImages.map((item) => (
          <div key={item.id} className="backgroundModal__item">
            <img src={item.img} alt="background" onClick={() => selectImageHandler(item.img)} />
          </div>
        ))}
        <button className="backgroundModal__btn-close" onClick={() => dispatch(closeBackModal())}>
          close
        </button>
      </div>
    </div>
  );
};

export default BackgroundModal;
