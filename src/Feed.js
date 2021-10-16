import React, { useEffect, useState } from 'react'

import firebase from "firebase"
import { db } from './firebase'

import { selectUser } from './features/userSlice'
import { useSelector } from 'react-redux'

import FlipMove from "react-flip-move"

import CreateIcon from "@material-ui/icons/Create"
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'

import InputOption from './InputOption'
import Post from './Post'

import "./Feed.scss"
export const Feed = () => {
const [inputValue, setInputValue] = useState("")
const [posts, setPosts] = useState([])

const user = useSelector(selectUser)

useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => (
        setPosts(snapshot.docs.map(doc => (
            {
                id: doc.id,
                data: doc.data()
            }
        )))
    ))
}, [])

const sendPost = (e) => {
    e.preventDefault()

    db.collection("posts").add({
        name: user.displayName,
        description: user.email,
        message: inputValue,
        photoUrl: user.photoUrl || "",
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInputValue("")
}

const handleSubmit = (e) => {

}

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form onSubmit={handleSubmit} action="">
                        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
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
            <FlipMove>
                {posts.map((post) => {
                    const {id, data: { name, description, message, photoUrl}} = post
                    return <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl}/>
                    }
                )}
            </FlipMove>
        </div>
    )
}

export default Feed
