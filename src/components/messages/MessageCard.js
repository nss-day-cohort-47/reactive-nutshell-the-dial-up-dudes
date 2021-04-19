import React from 'react'
import { Link } from 'react-router-dom'
import './Message.css'


export const MessageCard = ({ message, fromUser, handleDeleteMessage, currentUserId }) => {
  let userMess;
  let publicMess;
  let privateMess;

  // const privateMessage = () => {
  //   if (message.receiverId !== undefined) {
  //     privateMess = message
  //   } if (privateMess?.receiverId === currentUserId) {
  //     return privateMess
  //   }
  // }

  const userMessage = () => {
    if (fromUser === true) {
      userMess = message
    }
    return userMess
  }
  userMessage()

  const publicMessage = () => {
    if (fromUser === false) {
      publicMess = message
    }
    return publicMess
  }

  publicMessage()
  // console.log('its a mess', publicMess)



  return (
    fromUser ?
      <section className='message__card'>
        <div className='message__right'>
          <h6><b>{ userMess.user.name }</b></h6>
        </div>
        <div className='message__right-content'>{ userMess.message }
        </div>
        <div className='message__edit-delete'>
          <Link className='delete__me' to={ '/messages/send' } onClick={ () => handleDeleteMessage(userMess.id) }>
            [ delete ]
          </Link>
          <Link className='edit__me' to={ `/messages/${ userMess.id }/edit` }>
            [ edit ]
          </Link>
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