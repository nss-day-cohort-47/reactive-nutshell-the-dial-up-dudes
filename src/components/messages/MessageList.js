import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { deleteMessage, getAllMessages } from '../../modules/MessageDataManager'
import { MessageSend } from "./MessageSend"
import { MessageEdit } from './MessageEdit'
import { MessageCard } from './MessageCard'

export const MessageList = () => {

  const [ messages, setMessages ] = useState([])
  // gets logged in user's ID - we'll use this later
  const currentUserId = JSON.parse(sessionStorage.getItem("nutshell_user"))
  const userMessage = [ ...messages ]

  // Get all messages and then filter them. We only want 
  // public messages (undefined recID), messages from current user, 
  // or messages sent to current user (recID = current user ID)
  const messageSorter3000 = () => {
    const messageSort = getAllMessages().then(results =>
      results.filter(oneMessage => {
        if (oneMessage.receiverId === undefined || oneMessage.receiverId === currentUserId || oneMessage.userId === currentUserId) {
          return oneMessage
        }
      })).then(results => {
        return results
      })
    return messageSort
  }

  // Invoke message sort function and set messages to DOM.
  const getMessages = () => {
    return messageSorter3000().then(message => {
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
      .then(() => messageSorter3000().then(setMessages))
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
          { userMessage.map(message =>
            < MessageCard
              key={ message.id }
              message={ message }
              fromUser={ fromUser }
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