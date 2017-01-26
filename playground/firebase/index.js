import firebase from 'firebase';

var config = {
apiKey: "AIzaSyAeJ1SOoXs76SMpSw_jktqbVEyHNocrw9M",
  authDomain: "mont-reacttodo.firebaseapp.com",
  databaseURL: "https://mont-reacttodo.firebaseio.com",
  storageBucket: "mont-reacttodo.appspot.com",
  messagingSenderId: "1011056506205"
};
firebase.initializeApp(config);

firebase.database().ref().set({
  appName: 'ToDo App'
});