# Reactive Nutshell: The Dial Up Dudes

We are the Dial Up Dudes! 
[Alex Dudley](https://github.com/dudley-codes) 
[Autumn Fotopoulos](https://github.com/AutumnFoto)
[Nick Patton](https://github.com/NSPatton)
[Abbey Royse](https://github.com/abbeyroyse13) 

We're students at Nashville Software School and are a part of Cohort 47. 
This is our version of the Reactive Nutshell App. 
The Reactive Nutshell is an app that organizes and displays an individual user's articles, tasks, events, messages, and friends. 

** What we used for this project ** 
- JSON Server
- React
- react-router-dom

** How to open this project **
1. Git clone it onto your local machine
2. In the API directory, run json-server -p 8088 -w database.json
3. In the src directory, run npm start

** Our wireframe and ERD **
[Wireframe:](https://miro.com/app/board/o9J_lKAPB1M=/)
[ERD:](https://dbdiagram.io/d/6074f0dfb6aeb3052d8fc9a1)

## Reactive Nutshell: The Information Dashboard

## Setup: Follow these steps exactly

1. Clone this repository
1. `cd` into the directory it creates
1. In the `api` directory, create a copy of the `database.json.example` and remove the `.example` extension.
1. Run `json-server -p 8088 -w database.json` from the `api` directory.
1. Run `npm install` and wait for all dependencies to be installed.
1. Run `npm start` to verify that installation was successful.

> **Note:** Your `database.json` file is already in the `.gitignore` file for this project, so it will never be added to the repo or pushed to Github.

## What is Reactive Nutshell?

Nutshell is a new product offering that you have been tasked with building. It's an app for people to use to organize their daily tasks, events, news article, friends, and chat messages.

You will be using the React library to build out this application.

To start you off, here's an example of what some of the resources in your API should look like once it's populated with some data from your application.

### Users

```json
{ "id": 1, "name": "Steve Brownlee", "email": "me@me.com" }
```

### Friends

```json
{ "id": 1, "userId": 1, "currentUserId": 3 }
```

### News Articles

```json
{
    "id": 1,
    "userId": 2,
    "url": "https://www.quantamagazine.org/newfound-wormhole-allows-information-to-escape-black-holes-20171023/",
    "title": "Wormholes Allow Information to Escape Black Holes",
    "synopsis": "Check out this recent discovery about workholes",
    "timestamp": "2021-02-11T15:24"
}
```

## Professional Requirements

1. All teammates must use React and JSON-server. 
1. Each module should have a comment at the top with the following info: author(s) and purpose of module
1. The README for your project should include instructions on how another person can download and run the application
1. An ERD showing the database relationships. A screenshot/image should be included on your README.

## A Note About Authentication

We want you to know that the login and registration code we have given you is fake, completely insecure, and would never be implemented in a professional application. It is a simulation authentication using very simplistic tools, because authentication is not a learning objective of students at NSS.

You will be using [session storage](https://javascript.info/localstorage#sessionstorage) to keep track of which user has logged into Nutshell. You need to read the code in the **`Login.js`** and **`Register.js`** components so that you see what is going on, but you do not need to change it.

## Keep in mind some tips for a good usable app
1. Use acceptable conventions
   * Logo positioned at top left
   * Navigation across the top or down the left side
2. Visual hierarchy
   * Most important information is the most prominent
3. Break pages up into defined sections
   * Logically related content should be related visually
4. That which is clickable should be obviously clickable.
5. Eliminate distractions
   * Use only two typefaces
   * Limit color pallet (3 colors with black and white)
   * Use a grid
6. Support scanning (users don't read)
   * Use plenty of headings
   * Short paragraphs
   * Bulleted lists
7. Strive for consistency.

### Story

## As a user, I should be able to:

1.  add other users as friends so they can view my information

1.  remove someone from my friends list

1.  list interesting news articles on my dashboard

1.  enter in an event that will happen at a future date, and when that event is next on the agenda, it should be more prominent in the application

1. enter in a task name, and an expected completion date, and be able to mark them as complete

1.  activate my account and chat with other users. All messages are public (like a message board), which means that all users can see them.

1.  modify a news article that I previously created

1.  modify an event that I previously created

1.  modify a task that I previously created

1.  modify a message that I previously posted

1.  send a message that only a specific user can see

1.  see the weather for today, or for a specific event

