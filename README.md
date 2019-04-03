# Neightbourhood Map (React)

This is a single page application featuring a neighbourhood map with highlighted locations, third-party data about those locations and various ways to browse the content.

The app was built with React to develop the UI and help manage the codebase. Map services are provided by Google Maps using the [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/reference/3.exp/) and all third-party data about each location is fectched from [Foursquare](https://developer.foursquare.com/).

This app was completed as part of the Udacity's Front-End Web Developer Nanodegree program.

You can view the live application [here](https://kes2401.github.io/neighbourhood-map/).


## Install & Run

To get started:

* install all project dependencies with `npm install`
* start the development server with `npm start`


## Offline First

The production build of this app includes a Service Worker so that the app loads from a cache on future visits. This makes it a fully functional, offline first Progressive Web App and future vists to the app will render even when there is no network access.

To build the app for production you should run `npm run build` which will include the service worker and prepare the app for deployment. The app is built to the `build` folder.

The service worker will not work in development mode.


## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

