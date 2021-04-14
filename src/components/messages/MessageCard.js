import React from 'react'
import './Message.css'

export const MessageCard = ({ message, fromUser }) => {
  let messageClass = 'message__left'

  fromUser ? messageClass = 'message__right' : messageClass = 'message__left'

  return (
    fromUser ?
      <section className='message__card'>
        <div className='message__right'>
          <h4>{ message.message } <b>{ message.user.name }</b></h4>
        </div>
      </section> :
      <section className='message__card'>
        <div className='message__left'>
          <h4><b>{ message.user.name }</b> { message.message }</h4>
        </div>
      </section>

  )
}