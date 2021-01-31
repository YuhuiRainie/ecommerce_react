import {takeLatest,put,all,call} from 'redux-saga/effects'
import {auth, googleProvider,createUserProfileDocument,getCurrentUser} from "../../firebase/firebase.utils";
import UserActionTypes from "./user-action-type";
import {signInFailure, signInSuccess,signOutFailure,signOutSuccess,signUpFailure,signUpSuccess} from "./user-action";
import {User} from "firebase";


export function* getSnapshotFromUserAuth(userAuth,additionalData) {
    try{
        const userRef = yield call(createUserProfileDocument,userAuth,additionalData)
        const userSnapShot = yield userRef.get();
        yield put(
            signInSuccess({id:userSnapShot.id,...userSnapShot.data()})
        )
    }catch (e) {
        yield put(signInFailure(e))
    }
}
export function* signInWithGoogle() {
    try{
        const {user} = yield auth.signInWithPopup(googleProvider)
        yield getSnapshotFromUserAuth(user)
    } catch (e) {
        yield put(signInFailure(e))
    }
}
export function* signInWithEmail({payload:{email,password}}) {
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email,password)
         yield getSnapshotFromUserAuth(user)
    } catch (e) {
    yield put(signInFailure(e))
    }
}

 export function* isUserAuthenticated() {
    try{
        const userAuth = yield getCurrentUser()
        if(!userAuth) return
        yield  getSnapshotFromUserAuth(userAuth)
    }catch (e) {
        yield put(signInFailure(e))
    }
 }
 export function* signOut() {
    try{
        yield auth.signOut()
        yield put(signOutSuccess())
    }  catch (e) {
        yield put(signOutFailure(e))
    }
 }


export function* signUpWithEmail({payload:{displayName,email,password}}) {
    try{
        const {user} = yield auth.createUserWithEmailAndPassword(email,password)
        yield put(
            signUpSuccess({user,addtionalData:{displayName}})
        )
    }catch (e) {
        yield put(signUpFailure(e))
    }
}

export function* signInAfterSignUp({payload:{user,addtionalData}}) {
    yield getSnapshotFromUserAuth(user,addtionalData)
}
export function* onGoogleSignInStart() {
 yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle)
}
export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail)
}
export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION,isUserAuthenticated)
}
export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START,signOut)
}
export function* signUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START,signUpWithEmail)
}
export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS,signInAfterSignUp)
}
export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(signUpStart),
        call(onSignUpSuccess)
    ])
}
