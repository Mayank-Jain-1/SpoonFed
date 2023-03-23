# SpoonFed

Food Ordering Website
Link to the app -> [Spoon-Fed](https://spoon-fed.vercel.app/)

***Note** Dont overuse the otp feature due to limited amount of emails available per month.  Hope you understand* 😊

## Overview / Technologies 💻
- Food Ordering website.
- *React.Js* for front end. 
- *Express* and *Node* for backend. 
- *MongoDb* for storing data. (mongoose)
- *Bootstrap* for css.
- *React-Router-Dom* for routing in react front end. 
- *Dotenv* for using .env files while development.
- *@emailjs/nodejs* for sending email for otp verification.
- *Axios* for making ajax request in front end.
- *React-icons* for icons
- *React-redux* for storing global states like all restaurant data etc. ⚛️ 


## Features ✨
- It shows the user different types of cuisines to quicksort from
- Allows user to Search, filter and sort for restaurants based on the cost, city, cuisine types.
- Uses Auth0 for authorization. Uses google OAuth, Facebook OAuth and Auth0 Database for Authorization. All real client ids used for projects made on google, facebook.
- Before completing order, using the AUthorized data an OTP is sent to the mail of the user for him to verify using a backend API call. Which uses emailJs to send emails.
- The Orders data is stored in the MongoDb server using an API POST request and all details about the order regarding item id, name, price, quantity, totalcost and with timestamp.


## What i learnt 🤯
- Starting with the Basics i got a better understanding and knowledge of the MERN Stack.
- More precisely the newer things i learnt from this includes Bootstrap. (Better usage and got familiar with bootstrap and its grid system and using SASS to configure its varaibles)
- OAuth . I got to learn about how website authorize with other social media websites like google. How a JWT token works and where it is stored. 
- Using Auth0. Using Auth0 library to integrate Authorization in the app.
- Making projects with Google Workspace and Facebook Developers. Using the APPID, CLient ID and using them in the Auth0 application. And then further using them into the application.
- Setting up domains for both development and production for auth0 and Google, Facebook projects. 
- EmailJS. Using email js to send an email to a receipent specified. 
- CRUD Operations in MongoDb

## Deployment using VERCEL 🛫
- The backend which is the [spoon-fed/server](https://github.com/Mayank-Jain-1/SpoonFed.github.io/tree/master/server) at https://spoon-fed-server.vercel.app/ which initially doesnt return anything at the base url.
- The front end which is the [spoon-fed/client](https://github.com/Mayank-Jain-1/SpoonFed.github.io/tree/master/client) at https://spoon-fed.vercel.app/
- The front end is proxied to the backend server which is https://spoon-fed-server.vercel.app/. So that CORS policy is not violated. And to get and post data.
- Environment variables are all set in the Vercel Project Settings both for front end and the backend.

## Difficulties faced 😵‍💫🧗‍♀️
- I really dont like bootstrap as i have been using tailwind in the past which i feel is much superior than bootstrap.
- Making the project APP for the facebook developers and setting up the domains for development purposes.
- Deploymment on vercel. For some time i was not able to proxy to the backend. ALso environment variables were also not woeking. Later these were discovered as settings in vercel project and the proxy to be added in the vercel.json object.
- Testing the EmailJS email system as you only get 200 emails per month in the free account. So i had to be very carefull and not overuse the api. 


Hope you like this project. 
