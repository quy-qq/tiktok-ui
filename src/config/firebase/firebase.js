import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth';
var firebaseConfig = {
    apiKey: 'AIzaSyAO2JhpqRyjzZZUw1oWzwd2aLIQzr9qRtU',
    authDomain: 'social-9a713.firebaseapp.com',
    projectId: 'social-9a713',
    storageBucket: 'fir-auth-dcb9f.appspot.com',
    messagingSenderId: '793102669717',
    appId: '1:793102669717:web:ff4c646e5b2242f518c89c',
};
firebase.initializeApp(firebaseConfig);

export const auth = getAuth();
