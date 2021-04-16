import React, { useEffect, useState } from 'react'
import { useHistory, Route } from 'react-router-dom'
import { deleteMessage, getAllMessages, getUserMessages } from '../../modules/MessageDataManager'
import { MessageCard } from './MessageCard'
import { MessageSend } from "./MessageSend"
import { MessageEdit } from './MessageEdit'
import { MessageRecCard } from './MessageRecCard'

export const MessageList = () => {

  const [ messages, setMessages ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true);
  const history = useHistory()
  // gets logged in user's ID - we'll use this later
  const currentUserId = JSON.parse(sessionStorage.getItem("nutshell_user"))
  // gets all messages and displays on the DOM. You need to invoke this every time you want to refresh your data without refreshing the page. 
  const getMessages = () => {
    return getAllMessages().then(message => {
      setMessages(message)
    })
  }
  // This looks for incoming messages and then displays them for you to read.
  useEffect(() => {
    getMessages()
  }, [])
  // We aren't using this yet, but it will allow you to delete your messages if you you have any ragrats. 
  const handleDeleteMessage = (id) => {
    deleteMessage(id)
      .then(() => getAllMessages().then(setMessages))
  }
  // Checks to see if a user is the logged in user, and returns a boolean.
  const fromUser = (message) => {
    const userBoolean = currentUserId === message.userId ? true : false;

    return userBoolean
  }

  const publicOrPrivate = (message) => {
    let trueOrFalse = false;
    if (message.receiverId === currentUserId || message.receiverId === undefined) {
      trueOrFalse = true
    }

    return trueOrFalse
  }

  // Returns all of the data for us. I then used the classnames to make everything look pretty and stuff. 
  return (
    <>
      <section className='messages__content'>
        <div className='message__content-container'>
          { messages.map(message =>
            <MessageCard
              key={ message.id }
              message={ message }
              fromUser={ fromUser(message) }
              handleDeleteMessage={ handleDeleteMessage }
              currentUserId={ currentUserId }
            />) }
          { messages.map(message =>
            <MessageRecCard
              key={ message.id }
              message={ message }
              fromUser={ fromUser }
              publicOrPrivate={ publicOrPrivate(message) }
              handleDeleteMessage={ handleDeleteMessage }
              currentUserId={ currentUserId }
            />) }
        </div>
      </section>
      <Route path='/messages/send'>
        <MessageSend
          getMessages={ getMessages }
          userId={ currentUserId }
        />
      </Route>
      <Route path='/messages/:messageId(\d+)/edit'>
        <MessageEdit
          userId={ currentUserId }
          getMessages={ getMessages }
        />

      </Route>
    </>
  )

}