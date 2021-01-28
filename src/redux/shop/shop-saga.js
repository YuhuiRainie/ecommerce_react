import {takeEvery,put,call} from 'redux-saga/effects'
import ShopActionTypes from "./shop-types";
import {fetchCollectionsFailure, fetchCollectionsStartAsync, fetchCollectionsSuccess} from "./shop-action";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";

export function* fetchCollectionsAsync() {
    try{
        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get()
        const collectionsMap = yield call(
            convertCollectionsSnapshotToMap,
            snapshot
        )
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (e) {
        yield put(fetchCollectionsFailure(e.message))
    }
    // yield console.log("hi")


}

export function* fetchCollectionsStart(){
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}
