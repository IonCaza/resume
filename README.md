# My Resume - Ion Caza - 09/15/2018

Can be accessed at <http://let.caza.in/>

## Purpose

* To gain exposure and job opportunities in Technology and Management.

## Stack

* React
* Webpack
* Material UI
* SASS
* ESLint
* Jest
* Jenkins

## To Do

* Add schema.org to Contact component
* Add About Me page as index and move Experience
* Create tracking viewer NavBar on Experience
* Add more gfx to Skills component
* Add Map tooltips in Experience
* Integrate recommendations from LinkedIn
* Consider different experiences based on who comes in
* Transition local data to mongoDB
* Look into enzyme
* Consider .env
* Consider adding Service Worker
* Clean up paths.js
* Fix overlap in Appbar over LeftNav when resizing
* Optimize to `renderToStaticMarkup`
* Refactor to use `withRouter` instead of passing prop to TopBar manually

## Change Log

### v2.2.0

* Breaks out Print component
* Adds support for printing
* Adds partially implemented script for inserting dynamic breakpoints
* Renames components based on their general function

### v2.1.2

* Adds print-js (not implemented yet)
* Adds Skills component

### v2.1.1

* Incremented version for Jenkins, who triggered automatically based on the webhook and built successfully

### v2.1.0

* This is MVP, first thin slice that showcases the resume application with relevant experience

### v2.0.4

* Breaks out components
* Reads data from .json

### v2.0.3

* Ejects CRA
* Fixes JEST

### v2.0.2

* Adds ESLint
* Adds Jest

### v2.0.1

* Adds material-ui
* Adds react-router

### v2.0

* Initial commit

## Install

* `yarn install`

## Run

* Development: `yarn dev` (starts Jest and webserver)
* Build: `yarn build` (builds to ./build)
* Start locally: `yarn start`
* Run tests: `yarn test`
