import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import rootSaga from "./saga/index";
import { histories, timer } from "./reducer/index";

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false
      })
    : compose;

const rootReducer = combineReducers({
  histories,
  timer
});

const sagaMiddleware = createSagaMiddleware();

export const configureStore = () => {
  const middleware = [thunk, sagaMiddleware];
  const enhancers = [applyMiddleware(...middleware)];
  const store = createStore(rootReducer, composeEnhancers(...enhancers));
  sagaMiddleware.run(rootSaga);
  return store;
};
