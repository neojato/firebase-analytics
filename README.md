firebase-analytics
=====================

Based on [Building a Realtime App with Firebase] - Airpair Tutorial

(updated for Firebase 3.x)

Presented/demoed at [Michigan DevFest 2017]

## Setup

1. Install/Update the Firebase CLI by running the following command: `npm install -g firebase-tools`
    (may need to use `sudo` depending on your local setup)
1. Clone this repo then run `firebase login` and `firebase init` to setup/link with a Firebase Project
1. Edit `firebase.json` to use `/dashboard.html` as the value for the key `hosting.rewrites.destination`

## Deploy

Running `firebase deploy` will deploy the code to Firebase Hosting.

[Building a Realtime App with Firebase]: https://www.airpair.com/firebase/posts/firebase-building-realtime-app
[Firebase Console]: https://console.firebase.google.com
[Michigan DevFest 2017]: https://devfest2017-8f458.firebaseapp.com/schedule/day1?sessionId=504
