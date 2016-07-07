import firebase from 'firebase';

// Initialize Firebase
const FIREBASE_CONFIG = {
  apiKey: "<YOUR-API-KEY>",
  authDomain: "<YOUR-AUTH-DOMAIN>",
  databaseURL: "<YOUR-DATABASE-URL>",
  storageBucket: "",
};
firebase.initializeApp(FIREBASE_CONFIG);
//
// IMPORTANT: this code assumes you've enabled anonymous access to the db...
//
// Create a reference with .ref() instead of new Firebase(url)
const rootRef = firebase.database().ref();
const itemsRef = rootRef.child('items');
const notesRef = rootRef.child('notes');

const db = {
  firebase: firebase,
  rootRef: rootRef,
  itemsRef: itemsRef,
  notesRef: notesRef
}

export default db;
