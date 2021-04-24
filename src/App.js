import React from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header/Header';
import GroupList from './components/GroupList/GroupList';
import GroupModal from './components/GroupModal/GroupModal';

import './App.css';

function App() {
  const modal = useSelector((state) => state.groups.groupsModalOpen);

  return (
    <div className="App">
      <Header />
      <GroupList />
      {modal ? <GroupModal /> : null}
    </div>
  );
}

export default App;
