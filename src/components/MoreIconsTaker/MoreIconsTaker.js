import React, { useState } from 'react'

import HeaderOption from '../HeaderOption/HeaderOption';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import classNames from 'classnames';

import "./MoreIconsTaker.scss"


const iconsTakerClassGroup = (newClass) => {
    return classNames("moreIconsTaker__icons", {
        fadeIn: newClass === "fadeIn",
        fadeOut: newClass === "fadeOut"
    });
  };

export const MoreIconsTaker = (props) => {
    const { icons, handleOptionClick } = props
    const [newClass, setNewClass] = useState("fadeOut")

    const handleMenuClick = () => {
        if(newClass === "fadeOut") {
            setNewClass("fadeIn")
        } else {
            setNewClass("fadeOut")
        }
    }

    return (
        <div className="moreIconsTaker">

            <div className="moreIconsWrapper" onClick={handleMenuClick}>
                <HeaderOption Icon={MoreHorizIcon} className="moreIcon"/>
            </div>

            <div className={iconsTakerClassGroup(newClass)}>
                {
                    icons && icons.map((icon, id) => {
                        if(icon === "avatar") {
                            return <HeaderOption
                                key={icon + id}
                                avatar={true}
                                onClick={handleOptionClick}
                                className="moreIconsTaker__icon"
                        />
                        }
                            return <HeaderOption
                                key={icon.type.render.displayName + id}
                                Icon={icon}
                                className="moreIconsTaker__icon"
                            />
                    })
                }
            </div>
        </div>
    )
}

export default MoreIconsTaker
