# Technical test Tailor-hub backend

## 1. Clone the proyect on you local machine

## 2. Install dependencies 
cd till you are in the right folder and then use 
```bash
$ npm install
```

## 3. Running locally
When instalations finish, start the server whith the script
```bash
$ npm run dev
```

This will start the server on port 5000

## 4. Start frontend

Go to frontend github and follow the instructions

# About backend 

In backend there is not persistance layer nor bbdd. There are only 2 files with mocked data: restaurants and user.
There are routes for user, restaurant, and authentication and their corresponding services.But there are not models due to the absence of bbdd. 
Both routes and services are incompleted but I have left commented code in case it could be completed in the future.
     
About the user, the mocked data has a nickname, an encripted password and array of restaurant ids.
And also has a checkToken middleware for JsonWebToken authentication.
   

