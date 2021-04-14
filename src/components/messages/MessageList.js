import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { deleteMessage, getAllMessages, getUserMessages } from '../../modules/MessageDataManager'
import { MessageCard } from './MessageCard'
import { SendMessage } from "./MessageSend"

export const MessageList = () => {

  const [ messages, setMessages ] = useState([])


  const history = useHistory()

  const currentUserId = JSON.parse(sessionStorage.getItem("nutshell_user"))

  const getMessages = () => {

    return getAllMessages().then(message => {
      setMessages(message)
    })
  }

  useEffect(() => {
    getMessages()
  }, [])

  const handleDeleteMessage = (id) => {
    deleteMessage(id)
      .then(() => getAllMessages().then(setMessages))
  }

  const fromUser = (message) => {
    const userBoolean = currentUserId === message.userId ? true : false;

    return userBoolean
  }



  return (
    <>
      <section className='messages__content'>
        <div className='message__content-container'>
          { messages.map(message =>
            <MessageCard
              key={ message.id }
              message={ message }
              fromUser={ fromUser(message) }
            />) }
        </div>
        <div className='message__send-container'>
          <SendMessage
            userId={ currentUserId }
          />
        </div>
      </section>
    </>
  )
}