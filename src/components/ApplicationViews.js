import React from "react"
import { Route } from "react-router-dom"
import { MessageList } from "./messages/MessageList"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */ }
      </Route>
      <Route path="/friends">
        {/* Render the component for list of friends */ }
      </Route>
      <Route path="/messages">
        <MessageList />
      </Route>
      <Route path="/tasks">
        {/* Render the component for the user's tasks */ }
      </Route>
      <Route path="/events">
        {/* Render the component for the user's events */ }
      </Route>
    </>
  )
}
