import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { writeMessage, getAllUsers } from '../../modules/MessageDataManager'
import './Message.css'

// Those things in between the parenthesis and curly braces are props. They've been passed from our parent element. Pretty neat!
export const MessageSend = ({ getMessages, userId }) => {
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
    // console.log('selected val', selectedVal)

    if (e.target.id.includes('Id')) {
      selectedVal = parseInt(selectedVal)
    }

    newMessage[ e.target.id ] = selectedVal

    setMessage(newMessage)
  }

  const handleClickSaveMessage = (e) => {
    e.preventDefault()
    setIsLoading(true)
    let completeMessage = { ...message }
    // The line below is setting the timestamp for each message. Should be able to use this method to send private messages...
    completeMessage.timestamp = Date.now()

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

    privateMessage()
      .then((res) => completeMessage.receiverId = res)
      .then(() => writeMessage(completeMessage))
      .then(getMessages)
      .then(() => {
        setMessage({
          message: '',
          timestamp: '',
          userId: userId,
          receiverId: ''
        })
      }
      ).then(setIsLoading(false))
  };

  return (
    <>
      <div className='message__send-container'>
        <form className='messages__input'>
          <fieldset>
            <input type='text' id='message' onChange={ handleControlledInputChange } required autoFocus className='messages__input-field' placeholder='Write stuff here...' value={ message.message } />
          </fieldset>
          <button className='message__send btn btn-primary' disabled={ isLoading } type='button' onClick={ handleClickSaveMessage }>Send</button>
        </form>
      </div>
    </>
  )

}