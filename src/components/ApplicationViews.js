import React from "react";
import { Route } from "react-router-dom";
import {FriendList} from "./friendsList/FriendList";
import {FriendListCard} from "./friendsList/FriendListCard";
import {TaskList} from "./tasks/TaskList"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>
      <Route path="/friends">
        <FriendList />
       
        {/* Render the component for list of friends */}
        <Route>
        </Route>
          <Route path="/friends">
            <FriendListCard />
          </Route>
        </Route>
      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>

      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
        <TaskList />
      </Route>
      {/* <Route path="/tasks/:taskId(\d+)/edit">
        <TaskEdit />
      </Route>
      <Route exact path="/tasks/create">
        <TaskForm />
      </Route> */}


      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}
