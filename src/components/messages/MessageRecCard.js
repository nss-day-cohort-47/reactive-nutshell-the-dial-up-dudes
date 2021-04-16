import React from 'react'
import { Link } from 'react-router-dom'
import './Message.css'


export const MessageRecCard = ({ message, fromUser, handleDeleteMessage, publicOrPrivate }) => {



  return (
    publicOrPrivate ?
      <section className='message__card'>
        <div className='message__left'>
          <h6><b>{ message.user.name }</b></h6>
        </div>
        <div className='message__left-content'>{ message.message }
        </div>
      </section>
      :
      null
    // <section className='message__card'>
    //   <div className='message__left'>
    //     <h6><b>{ publicMess.user.name }</b></h6>
    //   </div>
    //   <div className='message__left-content'>{ publicMess.message } </div>
    // </section>

  )
}