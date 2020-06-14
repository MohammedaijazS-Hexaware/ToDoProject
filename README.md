# ToDo Application Using 
- NodeJS
- Express
- MongoDB Atlas
- Heroku Cloud

### Install NodeJS
Refer the following link to install NodeJS https://nodejs.org/en/download/

### Create a DataBase using MongoDB Atlas
- MongoDB is used for storing large amount of unstructed data like JSON format.
- Refer the following link to create a database in cloud of MongoDB Atlas https://www.mongodb.com/cloud/atlas for free.
- At last, Copy the Connection String for further use.

### Get Started
- Create a new folder and open it in your favourite Editor.
- Open the Terminal in your folder and give the following command.
```
npm init
```
- Give the basic information and you will get a file called package.json

 #### Express
  - Express is the Web Framework which is used for Routing and other web functioning.
  - Go to Terminal and to your folder and type the following command to install Express
  ```
  npm install express
  ```
 #### MongoDB
  - Install MongoDB on your project because of making it global to all users who use your project.
  - Type the following command
  ```
  npm install mongodb
  ```
  ##### Mongoose
   - Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js
   - It is used for managing MongoDB in an easier way.
   - Just type
   ```
   npm install mongoose
   ```

- Create a new file called app.js
- In that file, import the express and mongoose packages
```
const express = require('express')
const mongoose = require('mongoose')
```
- Create a file called .env and save your connection string there because it should be unknown to others.
- Create another file called .gitignore and type .env and node_modules there such that it won't go to your github account.
- In order to make the properties which are in .env file visible, we should install a package called 'dotenv'. 
- So, in the Terminal, type the following command:
```
npm install dotenv
```
- Later, connect to the database using mongoose like below:
```
const dotenv=require('dotenv')
dotenv.config();
const endpoint=process.env.API_URL;
const port=process.env.PORT || 9000;
const app=express()
mongoose.connect(endpoint,{useNewUrlParser:true})
const con=mongoose.connection
con.on('open',function(){
    console.log('Connected....')
})
```
- Then, start the server by using the parameter 'app' of express like this:
```
app.listen(port,function(){
    console.log('Started')
})
```
- After that, create a new folder for having all your routes at one place.
- Then, route to the particular file for a particular url like this:
```
const empRouter=require('./routers/REST')
app.use('/ToDo',empRouter)
```

