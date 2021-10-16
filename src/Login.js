import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { auth } from './firebase'

import "./Login.scss"
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [profilePic, setProfilePic] = useState("")

    const dispatch = useDispatch()


    const loginToApp = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL
            }))
        }).catch(error => alert(error))
    }

    const register = () => {
        if(!name) {
            return alert('Please enter a full name!')
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic,
                }))
            })
        }).catch(error => alert(error))
    }

    return (
        <div className="login">
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png" alt="linkedIn-login" />

            <form>
                <input
                type="text"
                value={name} onChange={(e) => setName(e.target.value)}
                placeholder="Full name (recquired if registering)"
                 />
                <input
                type="text"
                value={profilePic}
                onChange={(e) => setProfilePic(e.target.value)}
                placeholder="Profile pic URL (optional)"
                />
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                />
                <input
                 type="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 placeholder="password"
                 />

                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>
                Not a member?{" "}
                <span className="login__register" onClick={register}>Register now</span>
            </p>
        </div>
    )
}

export default Login
