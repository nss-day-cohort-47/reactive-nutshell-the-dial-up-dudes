import React from 'react'
import './Message.css'

export const MessageCard = ({ message, fromUser }) => {
  // let messageClass = 'message__left'

  // fromUser ? messageClass = 'message__right' : messageClass = 'message__left'

  return (
    fromUser ?
      <section className='message__card'>
        <div className='message__right'>
          <h6><b>{ message.user.name }</b></h6>
        </div>
        <div className='message__right-content'>{ message.message } </div>
      </section> :
      <section className='message__card'>
        <div className='message__left'>
          <h6><b>{ message.user.name }</b></h6>
        </div>
        <div className='message__left-content'>{ message.message } </div>
      </section>

  )
}