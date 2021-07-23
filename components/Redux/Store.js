import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import getUserReducer from "./Reducer/getUserReducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./Saga";

const sagaMiddleware = createSagaMiddleware()


const store = createStore(
    getUserReducer,
    // applyMiddleware(thunk)
    applyMiddleware(sagaMiddleware)

);

sagaMiddleware.run(rootSaga)

export default store;