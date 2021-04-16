import React, { useState, useEffect } from 'react'
import { editMessage, getMessageById, getAllUsers } from '../../modules/MessageDataManager'
import './Message.css'
import { useHistory, useParams } from 'react-router-dom'

export const MessageEdit = ({ userId, getMessages }) => {
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
    let completeMessage = { ...message }

    const privateMessage = () => {
      let recId;
      const lowerCaseMessage = completeMessage.message.toLowerCase()
      const privateDM = (
        getAllUsers()
          .then(allUsers => {
            allUsers.map(user => {
              if (lowerCaseMessage.includes(`@${ user.name.toLowerCase() }`)) {
                recId = user.id
              } if (recId !== undefined) return recId
            })
          }).then(() => {
            return recId
          }))
      return privateDM
    }


    const asynchHell = (recId) => {
      const editedMessage = {
        id: messageId,
        message: completeMessage.message,
        userId: completeMessage.userId,
        timestamp: completeMessage.timestamp,
        receiverId: recId
      }
      return editedMessage
    }

    privateMessage()
      .then(results => asynchHell(results))
      .then(results =>
        editMessage(results)
          .then(() => history.push('/messages/send'))
          .then(getMessages))

  };

  useEffect(() => {
    getMessageById(messageId)
      .then(message => {
        setMessage(message)
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      <div className='message__send-container'>
        <form className='messages__input'>
          <fieldset>
            <input type='text' id='message' onChange={ handleFieldChange } required autoFocus className='messages__input-field' placeholder='Edit stuff here...' value={ message.message } />
          </fieldset>
          <button className='message__send btn btn-primary' disabled={ isLoading } type='button' onClick={ updateExistingMessage }>Update</button>
        </form>
      </div>
    </>
  )

}