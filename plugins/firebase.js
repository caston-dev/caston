import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDkSgZYWHE3AW326qPRCRqXnIqYRkDB3z0",
    authDomain: "act-staging.firebaseapp.com",
    databaseURL: "https://PROJECT_ID.firebaseio.com",
    projectId: "act-staging",
    storageBucket: "act-staging.appspot.com",
    messagingSenderId: "1234567890"
  })
}

export default firebase
