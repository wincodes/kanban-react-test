import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCc3zScuG7TahwD14_8wkpQ-vcFPFRHpAo",
    authDomain: "kanban-react-test.firebaseapp.com",
    databaseURL: "https://kanban-react-test.firebaseio.com",
    projectId: "kanban-react-test",
    storageBucket: "kanban-react-test.appspot.com",
    messagingSenderId: "90942264498",
    appId: "1:90942264498:web:f55253c128d7d5ac8de5ab"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase