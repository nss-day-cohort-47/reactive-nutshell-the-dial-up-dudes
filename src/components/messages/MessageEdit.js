import React, { useState, useEffect } from 'react'
import { editMessage } from '../../modules/MessageDataManager'
import './Message.css'
import { useHistory, useParams } from 'react-router-dom'

export const MessageEditForm = () => {
  const [ message, setMessage ] = useState({ message: '' })
  const [ isLoading, setIsLoading ] = useState(false)

  const { messageId } = useParams()
  const history = useHistory()

  const handleFieldChange = (e) => {
    const stateToChange = { ...message }
    stateToChange[ e.target.id ] = e.target.value
    setMessage(stateToChange)
  }

  const updateExistingMessage = (e) => {
    e.preventDefault()
    setIsLoading(true)

    const editedMessage = {
      id: messageId,
      message: message.message,
      receiverId: message.receiverId
    }

    editMessage(editedMessage)
      .then(() => history.push('/messages'))
  };


}