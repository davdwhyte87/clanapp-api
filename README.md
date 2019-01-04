[![Coverage Status](https://coveralls.io/repos/github/davdwhyte87/clanapp-api/badge.svg)](https://coveralls.io/github/davdwhyte87/clanapp-api)
[![Build Status](https://travis-ci.org/davdwhyte87/clanapp-api.svg?branch=develop)](https://travis-ci.org/davdwhyte87/clanapp-api)
# Clanapp
clan is a system for reaching out to people. It brings investors closer to people with ideas and helps share information.


## Project Overview
**clan api** This is the api powering the clan app. It is been built with Node js.

## Features

- Users can create rumors
- Users can edit rumors
- Users can like and comment a rumor
- Users can delete their rumors
- Users can view rumors


## Built with
- `JavaScript`
- `Node.js`
- `Express framework`


## Api Endpoints
- `GET /api/v1/rumors` - Fetches all the rumors
- `GET /api/v1/rumors/:id` - Fetches a single rumor
- `POST /api/v1/rumors` - Creates a rumor
- `PATCH /api/v1/rumors/:id` - Updates a single rumor
- `DELETE /api/v1/rumors` - Deletes a rumor
- `POST /api/v1/employments` - Creates an employment
- `GET /api/v1/employments` - Fetches all employments
- `GET /api/v1/employments/:id` - Fetches a single employment
- `PATCH /api/v1/employments/:id` - Updates a single employment
- `DELETE /api/v1/employments` - Deletes an employment
- `GET /api/v1/employments/:id/like` - Like or unlike an employment
- `POST /api/v1/auth/signup` - Signs a user up

 
 ## Known issues
- None for now


## Installation

- clone the repo
- cd into the project directory
- install node js 
- run npm i
- run npm start
- Once the server starts-up, you can query the api at 'http://localhost:3000/api/v1' using the end points stated above.


## License
![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)

- Copyright 2018 © clan
