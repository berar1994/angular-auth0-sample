# Auth0-Sample

Simple angular project using the [Auth0](https://auth0.com) service for secure access on routes.

## Auth0 set up

1) Create an account [here](https://auth0.com/signup?&signUpData=%7B"category"%3A"button"%7D)
2) Click **NEW APPLICATION** and choose **Single Page Web Applications**
3) Click **CREATE**
4) Go to **Settings** tab and type `http://localhost:4200/callback` in **Allowed Callback URLs** box.
5) Go to **Quick Start** tab and select Angular 2+
6) You will need to copy the values from auth.service.ts section into **your auth.service.ts** file.

## Angular CLI

In order to run this app you must have the Angular CLI installed. You can install it using `npm install -g @angular/cli`. 
More informations [here](https://cli.angular.io) .

## Install dependencies

`npm install`

## Start the app

`ng serve`

You can check it on http://localhost:4200.

