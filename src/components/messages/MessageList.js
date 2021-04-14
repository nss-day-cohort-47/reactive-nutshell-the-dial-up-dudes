import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { deleteMessage, getAllMessages, getUserMessages } from '../../modules/MessageDataManager'
import { MessageCard } from './MessageCard'
import { SendMessage } from "./MessageSend"

export const MessageList = () => {

  const [ messages, setMessages ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true);
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

  // useEffect(() => {
  //   getAllMessages()
  //     .then(res => {
  //       setMessages({
  //         message: res.message,
  //         userId: res.userId,
  //         receiverId: res.receiverId,
  //         timestamp: res.timestamp
  //       })
  //       setIsLoading(false)
  //     })
  // }, [])

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
            getMessages={ getMessages }
          />
        </div>
      </section>
    </>
  )
}