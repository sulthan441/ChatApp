import React from 'react'


import MessageForm from './MessageForm'
import TheirMessage from './TheirMessage'
import MyMessage from './MyMessage'
function ChatFeed(props) {
    const { chats, activeChat, userName, messages } = props;
    const chat = chats && chats[activeChat];
    console.log(chat, userName, messages)
    // console.log(props)
    return (
        <div>ChatFeed</div>
    )
}

export default ChatFeed