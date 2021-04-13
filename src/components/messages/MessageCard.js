import React from 'react'
import './Message.css'

export const MessageCard = ({ message }) => (
  <section className='message__card'>
    <div className='message__card-content'>
      <b>{ message.user.name }</b>: { message.message }
    </div>
  </section>
)