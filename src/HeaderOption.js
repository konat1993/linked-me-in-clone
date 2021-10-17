import React from 'react'

import { selectUser } from './features/userSlice'
import { useSelector } from 'react-redux'
import { Avatar } from '@material-ui/core'

import classNames from 'classnames';


import "./HeaderOption.scss"
const headerOptionClasses = (breakLine) => {
    return classNames("headerOption", {
        breakLine: breakLine
    });
  };

export const HeaderOption = (props) => {
    const {avatar, Icon, title, onClick, breakLine} = props
    const user = useSelector(selectUser)
    return (
        <div onClick={onClick} className={headerOptionClasses(breakLine)}>
            {Icon && <Icon className="headerOption__icon" />}
            {avatar && (
                <Avatar
                    style={{height: "25px", width: "25px"}}
                    className="headerOption__icon"
                    src={user?.photoUrl}
                >
                        {user?.email[0].toUpperCase()}
                </Avatar>
            )
            }
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption
