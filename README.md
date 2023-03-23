# SpoonFed.github.io

Link to the app -> [Spoon-Fed](https://spoon-fed.vercel.app/)

## Overview / Technologies
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
- *React-redux* for storing global states like all restaurant data etc. 


## Features
- It shows the user different types of cuisines to quicksort from
- Allows user to Search, filter and sort for restaurants based on the cost, city, cuisine types.
- Uses Auth0 for authorization. Uses google OAuth, Facebook OAuth and Auth0 Database for Authorization. All real client ids used for projects made on google, facebook.
- Before completing order, using the AUthorized data an OTP is sent to the mail of the user for him to verify using a backend API call. Which uses emailJs to send emails.
- The Orders data is stored in the MongoDb server using an API POST request and all details about the order regarding item id, name, price, quantity, totalcost and with timestamp.


## What i learnt
- Starting with the Basics i got a better understanding and knowledge of the MERN Stack.
- More precisely the newer things i learnt from this includes Bootstrap. (Better usage and got familiar with bootstrap and its grid system and using SASS to configure its varaibles)
- OAuth . I got to learn about how website authorize with other social media websites like google. How a JWT token works and where it is stored. 
- Using Auth0. Using Auth0 library to integrate Authorization in the app.
