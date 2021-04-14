import React from 'react'
import './Message.css'

export const MessageCard = ({ message, fromUser }) => {
  let messageClass = 'message__left'

  console.log('test', message)

  fromUser ? messageClass = 'message__right' : messageClass = 'message__left'

  return (
    <section className='message__card'>
      <div className={ messageClass }>
        <b>{ message.user.name }</b>: { message.message }
      </div>
    </section>
  )
}