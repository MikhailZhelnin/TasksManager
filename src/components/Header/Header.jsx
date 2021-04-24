import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeTheme } from '../../redux/actionCreators/themeActionCreator';

import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={theme ? 'header' : 'header header-dark'}>
      <div className="container">
        <div className="header__wrapper">
          <h2 className="header__title">Tasks App</h2>
          <button className="header__btn" onClick={() => dispatch(changeTheme())}>
            change theme
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
