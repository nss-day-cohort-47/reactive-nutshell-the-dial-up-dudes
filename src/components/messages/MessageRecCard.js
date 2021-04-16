import React from 'react'
import { Link } from 'react-router-dom'
import './Message.css'


export const MessageRecCard = ({ message, fromUser, handleDeleteMessage, publicOrPrivate }) => {
  const userMessages = () => publicOrPrivate ? message : undefined

  console.log(userMessages)
  return (
    fromUser(userMessages) ?
      <section className='message__card'>
        <div className='message__left'>
          <h6><b>{ message.user.name }</b></h6>
        </div>
        <div className='message__left-content'>{ message.message }
        </div>
      </section>
      :
      <section className='message__card'>
        <div className='message__right'>
          <h6><b>{ message.user.name }</b></h6>
        </div>
        <div className='message__right-content'>{ message.message }
        </div>
        <div className='message__edit-delete'>
          <Link className='delete__me' to={ '/messages/send' } onClick={ () => handleDeleteMessage(message.id) }>
            [ delete ]
        </Link>
          <Link className='edit__me' to={ `/messages/${ message.id }/edit` }>
            [ edit ]
        </Link>
        </div>
      </section>

  )
}