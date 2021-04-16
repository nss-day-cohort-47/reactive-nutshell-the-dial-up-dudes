import React from "react"
import { Route } from "react-router-dom"
import { EventForm } from "./events/EventForm"
import { EventList } from "./events/EventList"
//import { EventEditForm } from "./events/EventEdit"
import { TaskList } from "./tasks/TaskList"
import { TaskForm } from "./tasks/TaskForm"
import { MessageList } from "./messages/MessageList"

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
        <MessageList />
      </Route>

      <Route exact path="/tasks">
        {/* Render the component for the user's tasks */}
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
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}
