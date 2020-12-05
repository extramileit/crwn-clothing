import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCQvCxBvBqSiFs9bAJwtysJXgu9cwffgdg",
    authDomain: "crwn-db-81a47.firebaseapp.com",
    projectId: "crwn-db-81a47",
    storageBucket: "crwn-db-81a47.appspot.com",
    messagingSenderId: "575156506425",
    appId: "1:575156506425:web:0b57dc830ed677bdc862e8",
    measurementId: "G-Q3G0W1ZSBY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
