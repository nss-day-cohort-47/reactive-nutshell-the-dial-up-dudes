import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { deleteMessage, getAllMessages, getUserMessages } from '../../modules/MessageDataManager'
import { MessageCard } from './MessageCard'
import { SendMessage } from "./MessageSend"

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
  }, [ messages ])
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
            />) }
        </div>
      </section>
      <div className='message__send-container'>
        <SendMessage
          // These are props. We can use them to pass stuff to our other components. I think it's pretty awesome!
          userId={ currentUserId }
          getMessages={ getMessages }
        />
      </div>
    </>
  )
}