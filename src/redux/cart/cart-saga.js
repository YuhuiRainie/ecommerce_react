import {takeEvery,put,call,takeLatest,all} from 'redux-saga/effects'
import UserActionTypes from "../user/user-action-type";
import {clearCart} from "./cart-action";


export function* clearCartOnSignOut() {
    yield put(clearCart())
}

export function* onSignOutSucess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS,clearCartOnSignOut)
}

export function* cartSaga() {
    yield all([call(onSignOutSucess)])
}
