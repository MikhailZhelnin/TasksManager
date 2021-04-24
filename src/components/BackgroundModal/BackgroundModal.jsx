import React from 'react';
import { useDispatch } from 'react-redux';

import {
  closeBackModal,
  selectBackground,
} from '../../redux/actionCreators/backgroundActionCreator';

import { dataImages } from '../../utils/background';

import './BackgroundModal.css';

const BackgroundModal = () => {
  const dispatch = useDispatch();

  return (
    <div className="backgroundModal">
      <div className="backgroundModal__wrapper">
        {dataImages.map((item) => (
          <div key={item.id} className="backgroundModal__item">
            <img
              src={item.img}
              alt="background"
              onClick={() => dispatch(selectBackground(item.img))}
            />
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
