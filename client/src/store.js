import { createStore, applyMiddleware } from 'redux';
import  { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from './sagas';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];
// const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
