import React, { useEffect, useState } from 'react'
import { useHistory, Route } from 'react-router-dom'
import { deleteMessage, getAllMessages, getUserMessages } from '../../modules/MessageDataManager'
import { MessageCard } from './MessageCard'
import { MessageSend } from "./MessageSend"
import { MessageEdit } from './MessageEdit'
import { MessageRecCard } from './MessageRecCard'

export const MessageList = () => {

  const [ messages, setMessages ] = useState([])
  const [ prop, setState ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true);
  const history = useHistory()
  // gets logged in user's ID - we'll use this later
  const currentUserId = JSON.parse(sessionStorage.getItem("nutshell_user"))
  const userMessage = [ ...messages ]
  // gets all messages and displays on the DOM. You need to invoke this every time you want to refresh your data without refreshing the page. 
  // const getMessages = () => {
  //   return getAllMessages().then(message => {
  //     console.log('getMessages', message)
  //     setMessages(message)
  //   })
  // }

  // TODO need fetch call to return array not promise pending. Then, I need to map through those messages. Then I need to set the messages from the message sorter 3000 
  // const fetchMessages = () => {
  //   let messageArray = []
  //   getAllMessages().then(message => { messageArray = message })
  //     .then(res => console.log(res))
  // }
  let messageCompiler = []
  // console.log('fetchMessages', fetchMessages())
  const messageSorter3000 = () => {

    const messageSort = getAllMessages().then(results =>
      results.filter(oneMessage => {

        if (oneMessage.receiverId === undefined || oneMessage.receiverId === currentUserId || oneMessage.userId === currentUserId) {
          messageCompiler = oneMessage

          return oneMessage
        }
      })).then(results => {
        return results
      })
    return messageSort
  }



  const getMessages = () => {
    return messageSorter3000().then(message => {
      console.log('getMessages', message)
      setMessages(message)
    })
  }





  // const fuckingWork = () => {
  //   return messageSorter3000()
  //     .then(res => {
  //       setState(res)
  //     })
  // }

  // useEffect(() => {
  //   fuckingWork()
  // }, [])

  // This looks for incoming messages and then displays them for you to read.
  useEffect(() => {
    getMessages()
  }, [])
  // We aren't using this yet, but it will allow you to delete your messages if you you have any ragrats. 
  const handleDeleteMessage = (id) => {
    deleteMessage(id)
      .then(() => getAllMessages().then(setMessages))
  }
  // Checks to see if a user is the logged in user, and returns a boolean.
  const fromUser = (message) => {
    const userBoolean = currentUserId === message.userId ? true : false;

    return userBoolean
  }


  // console.log('userMessage', userMessage)

  // setState(messageSorter3000())


  // const messageLooper = () => {
  //   const sorter = messageSorter3000()
  //   let looper = '';
  //   for (const oneMessage of sorter) {
  //     looper += MessageRecCard(oneMessage)
  //   } return looper
  // }
  // console.log('messageLooper', messageLooper())
  // console.log('pubOrPriv', messageSorter3000())

  // Returns all of the data for us. I then used the classnames to make everything look pretty and stuff. 
  return (
    <>
      <section className='messages__content'>
        <div className='message__content-container'>
          {/* { messages.map(message =>
            <MessageCard
              key={ message.id }
              message={ message }
              fromUser={ fromUser(message) }
              handleDeleteMessage={ handleDeleteMessage }
              currentUserId={ currentUserId }
            />) } */}
          { messages.map(message =>
            < MessageRecCard
              key={ message.id }
              message={ message }
              fromUser={ fromUser }
              handleDeleteMessage={ handleDeleteMessage }
              currentUserId={ currentUserId }
            />) }
        </div>
      </section>
      <Route path='/messages/send'>
        <MessageSend
          getMessages={ getMessages }
          userId={ currentUserId }
        />
      </Route>
      <Route path='/messages/:messageId(\d+)/edit'>
        <MessageEdit
          userId={ currentUserId }
          getMessages={ getMessages }
        />

      </Route>
    </>
  )

}