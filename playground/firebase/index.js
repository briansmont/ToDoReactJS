import firebase from 'firebase';

var config = {
apiKey: "AIzaSyAeJ1SOoXs76SMpSw_jktqbVEyHNocrw9M",
  authDomain: "mont-reacttodo.firebaseapp.com",
  databaseURL: "https://mont-reacttodo.firebaseio.com",
  storageBucket: "mont-reacttodo.appspot.com",
  messagingSenderId: "1011056506205"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Mont To-Do Application',
    v: '1.3.5'
  },
  isRunning: true,
  user: {
    name: 'Brian',
    age: 28
  }
});

var todosRef = firebaseRef.child('todos');
todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});
todosRef.on('child_changed', (snapshot) => {
  console.log('child_changed', snapshot.key, snapshot.val());
});
todosRef.on('child_removed', (snapshot) => {
  console.log('child_removed', snapshot.key, snapshot.val());
});

var todo1 = todosRef.push({text: 'fold clothes'});
var todo2 = todosRef.push({text: 'feed benny'});







// var notesRef = firebaseRef.child('notes');
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });

// var newNoteRef = notesRef.push({
//   text: 'walk benny!!!'
// });
// console.log('todoID', newNoteRef.key);

// firebaseRef.once('value').then((snapshot) => {
//   console.log('Got entire DB', snapshot.val());
// }, (e) => {
//   console.log('unable to fetch value', e);
// });

// firebaseRef.on('value', (snapshot) => {
//   console.log('Got value', snapshot.val())
// });
// can also be written as:
// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// };
// firebaseRef.on('value', logData);

// firebaseRef.off();

// firebaseRef.child('user/age').remove();
// firebaseRef.child('app').update({
//   v: '2.0.0',
//   name: null
// });

// firebaseRef.update({
//   'app/name': 'Get it done',
//   'user/name': 'MONT'
// });
// firebaseRef.child('app').update({name: 'ToDoApp'});
