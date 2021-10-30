import React from 'react'

import {selectUser} from "../../features/userSlice"
import {useSelector} from "react-redux"

import { Avatar } from '@material-ui/core'

import "./Sidebar.scss"
export const Sidebar = () => {
const user = useSelector(selectUser)

    const recentItem = (topic) => {
        return <div className="sidebar__recentItem">
                 <span className="sidebar__hash">#</span>
                 <p>{topic}</p>
              </div>
    }
   return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://media-exp1.licdn.com/dms/image/C4D16AQFnpQ1Eh_UQdQ/profile-displaybackgroundimage-shrink_350_1400/0/1628512105117?e=1639612800&v=beta&t=xWFM-9opNQaTUnCWNK5tNLrP7dBTICADk9Jt9NkKTDg" alt="avatarBg" />
                <Avatar src={user?.photoUrl} className="sidebar__avatar">
                    {user.email[0].toUpperCase()}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,448</p></div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("softwareengineering")}
                {recentItem("design")}
                {recentItem("developer")}
            </div>
        </div>
    )
}

export default Sidebar
