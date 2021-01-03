import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyArNj6rvTAFarVfFWjxFlhMsdhvmV9Ks4g",
    authDomain: "ecommerce-db-7f166.firebaseapp.com",
    projectId: "ecommerce-db-7f166",
    storageBucket: "ecommerce-db-7f166.appspot.com",
    messagingSenderId: "1089198184541",
    appId: "1:1089198184541:web:396d14c84c7110390455b4",
    measurementId: "G-8011NY924D"
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    console.log(snapShot)
    console.log(userRef)
    console.log(userAuth)

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;

        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
