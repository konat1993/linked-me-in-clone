import React, { useState } from 'react'

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Widgets } from "../Widgets/Widgets"

import "./MobileExpander.scss"
export const MobileExpander = () => {
    const [open, setOpen] = useState(false)

    const recentItem = (topic) => {
        return <div className="mobileExpander__recentItem">
            <span className="mobileExpander__hash">#</span>
            <p>{topic}</p>
        </div>
    }

    const clickExpander = () => {
        setOpen(!open)
    }
    return (
        <div className="mobileExpander">
            <div className="mobileExpander-trigger" onClick={() => clickExpander()}>
                <span>{open ? 'Pokaż mniej' : 'Pokaż więcej'}</span> <div className={`${open && `mobileExpander-rotateIcon`}`}><KeyboardArrowDownIcon /></div></div>
            <div className={`mobileExpander__container ${open ? `mobileExpander-expand` : `mobileExpander-collapse`}`}>

                <div className="mobileExpanderContainer__recent">
                    <p>Recent</p>
                    {recentItem("reactjs")}
                    {recentItem("programming")}
                    {recentItem("softwareengineering")}
                    {recentItem("design")}
                    {recentItem("developer")}
                </div>
                <Widgets mobileWidgetClass="mobileExpander-widgets" />
            </div>
        </div>
    )
}

export default MobileExpander
