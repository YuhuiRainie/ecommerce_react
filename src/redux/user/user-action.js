import UserActionTypes from './user-action-type'
import {ExposurePlus1Outlined} from "@material-ui/icons";
import {User} from "firebase";



export const googleSignInStart = () => ({
    type:UserActionTypes.GOOGLE_SIGN_IN_START
})
export const signInSuccess = user => ({
    type:UserActionTypes.SIGN_IN_SUCCESS,
    payload:user
})
export const signInFailure = err => ({
    type:UserActionTypes.SIGN_IN_FAILURE,
    payload:err
})


export const emailSignInStart = usernameAndPassword => ({
    type:UserActionTypes.EMAIL_SIGN_IN_START,
    payload:usernameAndPassword
})

export const checkUserSession = () => ({
    type:UserActionTypes.CHECK_USER_SESSION
})
export const signOutStart = () => ({
    type:UserActionTypes.SIGN_OUT_START
})
export const signOutSuccess = () => ({
    type:UserActionTypes.SIGN_OUT_SUCCESS
})
export const signOutFailure = error => ({
    type:UserActionTypes.SIGN_OUT_FAILURE,
    payload:error
})

