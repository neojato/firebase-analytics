firebase-analytics
=====================

[Building a Realtime App with Firebase] - Airpair Tutorial

(updated for Firebase 3.x)

## Setup

1. Clone this repo and run `firebase login` and then `firebase init` to setup/link with a Firebase Project
1. Copy ```config.js.template``` to ```config.js```
1. From the [Firebase Console], select your project and copy the web config settings into ```config.js```
1. Edit ```firebase.json``` to use ```dashboard.html``` for the key ```hosting.rewrites.destination```

## Deploy

Running `firebase deploy` will deploy the code to Firebase Hosting.

[Building a Realtime App with Firebase]: https://www.airpair.com/firebase/posts/firebase-building-realtime-app
[Firebase Console]: https://console.firebase.google.com