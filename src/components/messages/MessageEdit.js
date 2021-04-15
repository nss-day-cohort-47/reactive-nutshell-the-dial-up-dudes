import React, { useState, useEffect } from 'react'
import { editMessage, getMessageById } from '../../modules/MessageDataManager'
import './Message.css'
import { useHistory, useParams } from 'react-router-dom'
import { MessageCard } from './MessageCard'

export const MessageEditForm = ({ userId, getMessages }) => {
  const [ message, setMessage ] = useState({
    message: '',
    userId: userId,
    receiverId: ''
  })
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

  useEffect(() => {
    getMessageById(messageId)
      .then(message => {
        setMessage(message)
        setIsLoading(false)
      })
  })


  return (
    <>
      <MessageCard
        updateExistingMessage={ updateExistingMessage } />
      <form className='messages__input'>
        <fieldset>
          <input type='text' id='message' onChange={ handleFieldChange } required autoFocus className='messages__input-field' placeholder='Edit stuff here...' value={ message.message } />
        </fieldset>
        <button className='message__send btn btn-primary' disabled={ isLoading } type='button' onClick={ updateExistingMessage }>Update</button>
      </form>
    </>
  )

}