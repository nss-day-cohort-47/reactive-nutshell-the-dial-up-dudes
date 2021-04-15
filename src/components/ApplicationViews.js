import React from "react";
import { Route } from "react-router-dom";
import {FriendList} from "./friendsList/FriendList";
import {FriendForm} from "./friendsList/FriendListForm";
import {TaskList} from "./tasks/TaskList";
import {TaskForm} from "./tasks/TaskForm";
import { MessageList } from "./messages/MessageList";


export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */ }
      </Route>

      <Route path="/friends">
        <FriendList />
       
        {/* Render the component for list of friends */}
        </Route>

          <Route path="/friends/create">
            <FriendForm />
          </Route>

    
      <Route path="/messages">
        <MessageList />
      </Route>

      <Route exact path="/tasks">
        {/* Render the component for the user's tasks */ }
        <TaskList />
      </Route>
      {/* <Route path="/tasks/:taskId(\d+)/edit">
        <TaskEdit />
      </Route> */}
      <Route path="/tasks/create">
        <TaskForm />
      </Route>


      <Route path="/events">
        {/* Render the component for the user's events */ }
      </Route>
    </>
  )
}
