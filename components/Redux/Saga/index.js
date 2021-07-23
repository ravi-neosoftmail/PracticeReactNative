import { call, put, all, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
import {
    FETCH_USER_REQUEST,
} from '../Constant';
import { fetchUserSuccess } from "../Action";


export function* getUserDetails() {
    try {
        const response = yield call( async () =>{
            const result = await axios.get('https://jsonplaceholder.typicode.com/users')
            return result;
        })

        yield put(fetchUserSuccess(response.data))

    } catch(error) {
        console.log(error,'error');
    }
}


function* watchMan() {
    yield takeLatest(FETCH_USER_REQUEST, getUserDetails)
}

export default function* rootSaga() {
  yield all([watchMan()]);
}