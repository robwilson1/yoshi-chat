# Yoti Node Starter

Starter app for Yoti integration using Express.js and ES6.

## Installation

1. Form the repository.
2. Clone the repository.
3. `cd` into the new directory and `rm` the `.git` directory.
4. Run `git init` to set up fresh git tracking.

## Node version

As this project is written in ES6, it is advised to use an ES6 complient version of node such as 6.8.0 or greater, however, by default the app transpiles to ES5 when run with `npm start`.

## How to integrate with your Yoti app

1. Create your app via the [Yoti Dashboard](https://www.yoti.com/dashboard)
2. Download your PEM file via the `Keys` tab.
3. Open the PEM file in an IDE and copy/paste the key in `/src/lib/keys/yoti-login.pem`
4. Click the `Integration` tab in Dashboard to set the callback URL.
5. Click the slider to make the app live, refresh and gran the `appId` and `sdkId`
5. Copy and paste these values into the appropriate keys in `src/config/index.json`
6. Done!

## Tests

Basic testing is provided with Mocha and Chai. Feel free to change this to your needs.
You can run tests with: `npm test`.

## Running the app

* Development = `npm run dev`
* Production = `npm start`
