import React from 'react'

import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';

import HeaderOption from './HeaderOption';
import MoreIconsTaker from './MoreIconsTaker';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import AssignmentIcon from '@material-ui/icons/Assignment';

import "./Header.scss"
import { auth } from './firebase';

const iconGroup = [
    ChatIcon,
    NotificationsIcon,
    "avatar",
    AppsIcon,
    AssignmentIcon
]

export const Header = () => {
    const dispatch = useDispatch()

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
    }

    const handleOptionClick = () => {
        logoutOfApp()
    }

    return (
        <div className="headerContainer">
            <div className="header">
                <div className="header__left">
                    <LinkedInIcon />
                    <div className="header__search">
                        <SearchIcon />
                        <input type="text" placeholder="Search" />
                        <div className="searchText">Search</div>
                    </div>
                </div>
                <div className="header__right">
                    <HeaderOption Icon={HomeIcon} title="Home"/>
                    <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                    <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                    <HeaderOption Icon={ChatIcon} title="Messaging"/>
                    <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                    <HeaderOption
                    avatar={true}
                    title="Me"
                    onClick={handleOptionClick}
                    breakLine={true}
                    />
                    <HeaderOption Icon={AppsIcon} title="Praca"/>
                    <HeaderOption Icon={AssignmentIcon} title="Opublikuj ofertę pracy"/>

                    <MoreIconsTaker icons={iconGroup} handleOptionClick={handleOptionClick}/>
                </div>
            </div>
        </div>
    )
}

export default Header
