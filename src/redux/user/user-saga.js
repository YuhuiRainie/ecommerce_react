import {takeLatest,put,all,call} from 'redux-saga/effects'
import {auth, googleProvider,createUserProfileDocument} from "../../firebase/firebase.utils";
import UserActionTypes from "./user-action-type";
import {googleSignInFailure, googleSignInSuccess} from "./user-action";

export function* signInWithGoogle() {
    try{
        const {user} = yield auth.signInWithPopup(googleProvider)
        const userRef = yield call(createUserProfileDocument,user)
        const userSnapShot = yield userRef.get();
        yield put(
            googleSignInSuccess({id:userSnapShot.id,...userSnapShot.data()})
        )
    } catch (e) {
        yield put(googleSignInFailure(e))
    }
}
export function* onGoogleSignInStart() {
 yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle)
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart)])
}
