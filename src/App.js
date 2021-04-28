import React from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header/Header';
import GroupList from './components/GroupList/GroupList';
import GroupModal from './components/GroupModal/GroupModal';
import BackgroundModal from './components/BackgroundModal/BackgroundModal';

import './App.scss';

function App() {
  const groupsModal = useSelector((state) => state.groups.groupsModalOpen);
  const backgroundModal = useSelector((state) => state.background.backgroundModalOpen);
  const backgroundImage = useSelector((state) => state.background.selectedBackground);

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}>
      <Header />
      <GroupList />
      {groupsModal ? <GroupModal /> : null}
      {backgroundModal ? <BackgroundModal /> : null}
    </div>
  );
}

export default App;
