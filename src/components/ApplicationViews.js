import React from "react"
import { Route } from "react-router-dom"
import {TaskList} from "./tasks/TaskList"
import {TaskForm} from "./tasks/TaskForm"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>
      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>
      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>

      <Route exact path="/tasks">
        {/* Render the component for the user's tasks */}
        <TaskList />
      </Route>
      {/* <Route path="/tasks/:taskId(\d+)/edit">
        <TaskEdit />
      </Route> */}
      <Route path="/tasks/create">
        <TaskForm />
      </Route>


      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}
