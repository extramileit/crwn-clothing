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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
