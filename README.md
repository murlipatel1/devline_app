# Devline

> A Realtime Chat Application

A simple realtime chat apoplication made using [React JS](https://reactjs.org/docs/getting-started.html), a JavaScript library to make awesome UI by Facebook, [Node JS](https://nodejs.org/en/docs), [Express JS](https://expressjs.com/en/api.html) and [MongoDB](https://docs.mongodb.com/).

This application uses [React JS](https://reactjs.org/docs/getting-started.html) component oriented UI creation paradigm. All components are written in [JSX](https://reactjs.org/docs/jsx-in-depth.html) and ES6 style and are
combined to get a single build for production purpose using [Webpack 5](https://webpack.js.org/concepts/).

ES6 `module` creation along with `import /export` is used. [Babel](https://babeljs.io/docs/en/babel-preset-react) is used to _transpile_ all [JSX](https://reactjs.org/docs/jsx-in-depth.html) code to vanilla JavaScript code. To install all the dependecies `npm` is used.

Back end is implemented using [Node JS](https://nodejs.org/en/docs), [Express JS](https://expressjs.com/en/api.html) and [MongoDB](https://docs.mongodb.com/). [Atlas](https://www.mongodb.com/cloud/atlas), the _Cloud_ version of [MongoDB](https://docs.mongodb.com/) is used. Real time communication is done using [Socket.io](https://www.npmjs.com/package/socket.io).

This is a _responsive web application_ for viewing in both Mobile and Desktop.


## Features

- Latest features of JavaScript i.e. ES6, ES7, ES8 is used
- [React JS Hooks](https://reactjs.org/docs/hooks-intro.html) are used with Functional components
- ES8 `async/await` is used

<br/>

<ul>
 <li> This is Devline Application </li>
 <li> It is a Full Stack Application </li>
</ul>


<ul>
 <li>Login/Signup as well as Logout feature is added </li>
 ![image](https://github.com/murlipatel1/devline_app/assets/100035961/5cc873d1-c610-4152-bec9-6bc7fb3489bd)

 ![image](https://github.com/murlipatel1/devline_app/assets/100035961/db148abd-4fec-488c-b92b-0ab615e3d45c)

 <li>Guest User Login added</li>
 
 <li>Error will be shown if the credentials are not correct</li>
</ul>

- Real time communication & notification is supported using <a href="https://www.npmjs.com/package/socket.io">Socket.io</a>

<ul>
 <li> Realtime One on One chats and group chats </li>
 <li> Functionality and features like Search for chats, create a group, add or remove partricipants. </li>
 <li> Read / Unread status of conversation is supported
 <li> All the conversation are stored in the database i.e. <i>persistant</i>
</ul>
 
## Frontend Screenshot

### Login and SignUp
![image](https://github.com/murlipatel1/devline_app/assets/100035961/58854d3a-9e9d-4667-b23a-0e935eca162f)

### Group Chat 
![image](https://github.com/murlipatel1/devline_app/assets/100035961/37bccdf2-0146-43f3-89ce-c89bcb4ca891)

### Search User
![image](https://github.com/murlipatel1/devline_app/assets/100035961/3a54045e-84b9-4416-8a4f-917e48565fe6)

## Database

![image](https://github.com/murlipatel1/devline_app/assets/100035961/11e7320a-c5a7-43e7-b232-0235aab30979)


## Tech Stack

MongoDB, Express, React, Node, Socket.IO, Chakra-UI

### Env Variables

Create a .env file in the root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = <yourMongoDbUri>
JWT_SECRET = <yourSecret>
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run
Run frontend (:3000) & backend (:5000)
```
# Run frontend only
cd frontend
npm start 

# Run backend only
npm start
```

