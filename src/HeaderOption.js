import React from 'react'
import { Avatar } from '@material-ui/core'

import "./HeaderOption.scss"
export const HeaderOption = (props) => {
    const {avatar, Icon, title} = props
    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOption__icon" />}
            {avatar && (
                <Avatar style={{height: "25px", width: "25px"}} className="headerOption__icon" src={avatar} />
            )
            }
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption
