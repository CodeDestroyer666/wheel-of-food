import { call, put, takeLatest } from 'redux-saga/effects'

class Api {
    static fetchExample() {
        return 'moi';
    }
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchExampleData(action) {
    try {
        const data = yield call(Api.fetchExample);
        yield put({ type: "EXAMPLE_FETCH_SUCCEEDED", data: data });
    } catch (e) {
        yield put({ type: "EXAMPLE_FETCH_FAILED", message: e.message });
        console.log(e);
    }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
    yield takeLatest("EXAMPLE_FETCH_REQUESTED", fetchExampleData);
}

export default mySaga;