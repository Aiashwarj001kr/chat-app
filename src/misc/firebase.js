import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyBPYZXagR0SJHwfKFvY53uHgsY9TYbKaMA",
    authDomain: "chat-app-bb07d.firebaseapp.com",
    projectId: "chat-app-bb07d",
    storageBucket: "chat-app-bb07d.appspot.com",
    messagingSenderId: "33536748886",
    appId: "1:33536748886:web:503eb195559e68f2293af7"
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();

