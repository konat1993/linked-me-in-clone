import React from 'react'

import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

import "./Widgets.scss"
export const Widgets = (props) => {
    const { mobileWidgetClass } = props

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className={`${mobileWidgetClass ? mobileWidgetClass : 'widgets'}`}>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("react", "Top news - 9099 readers")}
            {newsArticle("react-native", "Top news - 886 readers")}
            {newsArticle("react-redux", "Top news - 765 readers")}
            {newsArticle("next-js", "Top news - 321 readers")}
            {newsArticle("gatsby-js", "Top news - 8860 readers")}
            {newsArticle("redux-toolkit", "Top news - 6503 readers")}
        </div>
    )
}

export default Widgets
