import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

import './App.css';
function App() {
  const user =useSelector(selectUser)
  return (
    <div className="app">
      <Header />
      {!user ? <Login /> : (

        <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
        )}
    </div>
  );
}

export default App;
