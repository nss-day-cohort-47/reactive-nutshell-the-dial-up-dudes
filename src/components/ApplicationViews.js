import React from "react";
import { Route } from "react-router-dom";
import {FriendList} from "./friendsList/FriendList";
import {FriendForm} from "./friendsList/FriendListForm";
import {TaskList} from "./tasks/TaskList";
import {TaskForm} from "./tasks/TaskForm";
import { MessageList } from "./messages/MessageList";
import { EventForm } from "./events/EventForm"
import { EventList } from "./events/EventList"
//import { EventEditForm } from "./events/EventEdit"
// import { MessageEditForm } from "./messages/MessageEdit"
// import { MessageSend } from './messages/MessageSend'

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */ }
      </Route>

      <Route path="/friends">
        {/* Render the component for list of friends */}
        <FriendList />
      </Route>
      
      <Route path="/friends">
        {/* Render the component for list of friends */}
        <FriendForm />
      </Route>

      <Route path="/messages">
        <MessageList />
      </Route>

      {/* <Route path='/messages/send'>
        <MessageSend />
      </Route> */}

      {/* <Route path='/messages/:messageId(\d+)edit'>
        <MessageEditForm />
      </Route> */}

      <Route exact path="/tasks">
        {/* Render the component for the user's tasks */ }
        <TaskList />
      </Route>

      {/*<Route path="/tasks/:taskId(\d+)/edit">
        <TaskEdit />
      </Route> */}

      <Route path="/tasks/create">
        <TaskForm />
      </Route>

      <Route exact path="/events">
        <EventList />
      </Route>

      {/*<Route path="/events/:eventId(\d+)/edit">
          <EventEditForm />
        </Route>*/}

      <Route path="/events/create">
        <EventForm />
      </Route>

      <Route path="/events">
        {/* Render the component for the user's events */ }
      </Route>
    </>
  )
}
