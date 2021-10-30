import React, { useEffect } from 'react';
import { auth } from './services/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

import HomePage from './pages/HomePage/HomePage';
import Login from "./pages/Login/Login"
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from "./components/Widgets/Widgets"

import './App.css';
function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    //Checking if authorization is OK to log in user automatically
    //it is a listener which listens any sort of authentication (persisted)
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
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
        <HomePage>
          <Sidebar />
          <Feed />
          <Widgets />
        </HomePage>
      )}
    </div>
  );
}

export default App;
