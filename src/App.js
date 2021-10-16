import React, { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

import Login from "./Login"
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

import './App.css';
function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    //Checking if authorization is OK to log in user automatically
    //it is a listener which listens any sort of authentication (persisted)
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        //user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      } else {
        //user is not logged out
        dispatch(logout())
      }
    })
  }, [])
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
