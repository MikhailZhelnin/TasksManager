import React from 'react';
import { useDispatch } from 'react-redux';

import { openBackModal } from '../../redux/actionCreators/backgroundActionCreator';

import './Header.css';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <h2 className="header__title">Tasks Manager</h2>
          <button className="header__btn-background" onClick={() => dispatch(openBackModal())}>
            Background
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
