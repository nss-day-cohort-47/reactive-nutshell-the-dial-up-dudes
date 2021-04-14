import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getAllMessages, writeMessage } from '../../modules/MessageDataManager'
import './Message.css'

export const SendMessage = ({ userId }) => {
  // console.log('currentUserId', userId)
  const [ message, setMessage ] = useState({
    message: '',
    userId: userId,
    receiverId: '',
    timestamp: ''
  })

  const [ isLoading, setIsLoading ] = useState(false)

  const history = useHistory()

  const handleControlledInputChange = (e) => {
    const newMessage = { ...message }
    let selectedVal = e.target.value

    if (e.target.id.includes('Id')) {
      selectedVal = parseInt(selectedVal)
    }

    newMessage[ e.target.id ] = selectedVal

    setMessage(newMessage)
  }

  // useEffect(() => {
  //   getAllMessages()
  //     .then(message => {
  //       setMessage(message)
  //       setIsLoading(false)
  //     })
  // })

  const handleClickSaveMessage = (e) => {
    e.preventDefault()
    setIsLoading(true)

    writeMessage(message)
      .then(() => history.push('/messages'))
  };

  return (
    <>
      <form className='messages__input'>
        <fieldset>
          <input type='text' id='message' onChange={ handleControlledInputChange } required autoFocus className='messages__input-field' placeholder='Write stuff here...' value={ message.message } />
        </fieldset>
        <button className='btn btn-primary' disabled={ isLoading } type='button' onClick={ handleClickSaveMessage }>Send</button>
      </form>
    </>
  )

}