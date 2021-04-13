import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { deleteMessage, getAllMessages, getUserMessages } from '../../modules/MessageDataManager'
import { MessageCard } from './MessageCard'

export const MessageList = () => {

  const [ messages, setMessages ] = useState([])

  const history = useHistory()

  const getMessage = () => {

    return getAllMessages().then(message => {
      setMessages(message)
    })
  }

  useEffect(() => {
    getMessage()
  }, [])

  const handleDeleteMessage = (id) => {
    deleteMessage(id)
      .then(() => getAllMessages().then(setMessages))
  }
}