import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
import {config} from "./firebase-api-key";

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    // console.log(snapShot)
    // console.log(userRef)
    // console.log(userAuth)

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

// export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) => {
//     const collectionRef = firestore.collection(collectionKey);
//     console.log(collectionRef)
//
//     const batch = firestore.batch()
//     objectsToAdd.forEach( obj => {
//         const newDocRef = collectionRef.doc()
//         batch.set(newDocRef,obj)
//     })
//     return  await batch.commit()
// }

export const convertCollectionsSnapshotToMap = (collections) =>{
     const transformedCollection = collections.docs.map((doc) => {
         const {title, items } = doc.data()
         return {
             routeName:encodeURI(title.toLowerCase()),
             id:doc.id,
             title,
             items
         }
     })
    //回调函数第一次执行时，accumulator 和currentValue的取值有两种情况：
    // 如果调用reduce()时提供了initialValue，accumulator取值为initialValue，currentValue取数组中的第一个值；
    // 如果没有提供 initialValue，那么accumulator取数组中的第一个值，currentValue取数组中的第二个值。
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator
    },{})
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();


export const getCurrentUser = () => {
    return new Promise((resolve,reject)=>{
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            // reference :https://stackoverflow.com/questions/47043188/firebase-onauthstatechanged-unsubscribe-recursion
            unsubscribe()
            resolve(userAuth)
        },reject )
    })
}
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
