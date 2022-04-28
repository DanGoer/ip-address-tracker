# IP-Address-Tracker

> Another intermediate Frontend Mentor Challenge from (https://www.frontendmentor.io/home). This time with React, Tailwind and leaflet.

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)
- [Contact](#contact)
- [License](#license)

## General Information

This project was created with the purpose of learning how to handle different APIs and map plugin.

## Technologies Used

- React - version 17.0.2
- Tailwind - version 3.0.24
- axios - version 0.26.1
- leaflet - version 1.8.0
- react-leaflet - version 4.0.0

## Features

- On the first time the page is called, the IP of the visitor is displayed
- App shows requested IPs and additional data
- Shows a map and the position of the IP owner

## Setup

For running it on your local environment first:

`npm install or yarn install`

You have to create an .env with a API key which you can get for free from (https://geo.ipify.org/).

`REACT_APP_IP_ADDRESS_TRACKER_API_KEY=YOURAPIKEY`

To run development server:

`npm start or yarn start`

Open http://localhost:3000 with your browser to see the result.
For a full list of dependencies take a look at package.json.

## Usage

After visiting the page, you get information to your IP and additional data.
You can also request informations about other IPs.

## Project Status

Project is: _complete_

This is the finished version of my IP address tracker.

## Room for Improvement

- Adding more interaction with the map
- Adding CAPTCHA-test for security and anti spam reasons

## Contact

Created by [@DanGoer](https://www.github.com/DanGoer/) - feel free to contact me!

## License

Feel free to use this code for your own projects!
