import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { changeTheme } from '../../redux/actionCreators/themeActionCreator';
import { openBackModal } from '../../redux/actionCreators/backgroundActionCreator';

import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={theme ? 'header' : 'header header-dark'}>
      <div className="container">
        <div className="header__wrapper">
          <h2 className="header__title">Tasks Manager</h2>
          {/* <button className="header__btn" onClick={() => dispatch(changeTheme())}>
            change theme
          </button> */}
          <button className="header__btn-background" onClick={() => dispatch(openBackModal())}>
            Background
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
