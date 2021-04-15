import React from 'react'
import { Link } from 'react-router-dom'
import './Message.css'
import deleteButton from './delete-black.png'

export const MessageCard = ({ message, fromUser, handleDeleteMessage }) => {
  // let messageClass = 'message__left'

  // fromUser ? messageClass = 'message__right' : messageClass = 'message__left'

  return (
    fromUser ?
      <section className='message__card'>
        <div className='message__right'>
          <h6><b>{ message.user.name } </b></h6>
          <Link onClick={ () => handleDeleteMessage(message.id) }>
            <img className='delete__circle' src={ deleteButton } alt='circle with an x in it' />
          </Link>
        </div>
        <div className='message__right-content'>{ message.message }
        </div>
      </section> :
      <section className='message__card'>
        <div className='message__left'>
          <h6><b>{ message.user.name }</b></h6>
        </div>
        <div className='message__left-content'>{ message.message } </div>
      </section>

  )
}

