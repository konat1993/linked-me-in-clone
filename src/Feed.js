import React, { useState } from 'react'

import CreateIcon from "@material-ui/icons/Create"
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'

import InputOption from './InputOption'
import Post from './Post'

import "./Feed.scss"
export const Feed = () => {

const [posts, setPosts] = useState([])

const sendPost = (e) => {
    e.preventDefault()
}

const handleSubmit = (e) => {

}

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form onSubmit={handleSubmit} action="">
                        <input type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
                </div>
            </div>
            {posts.map((post) =>
                <Post name={post.name} description={post.description} message={post.message}/>
                )}
                <Post name="lukasz Luke" description="testDescription" message="message Test"/>
        </div>
    )
}

export default Feed
