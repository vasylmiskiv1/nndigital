import { createStore, combineReducers, compose, applyMiddleware, AnyAction } from "redux";
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { storeReducer } from "../reducers/storeReducer";
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// define persist config
const persistConfig = {
  key: "estore",
  storage,
};

// create persist store
const estore = persistReducer(persistConfig, storeReducer);

// use devtools and redux thunk middleware
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({ estore }),
  composeEnhancers(applyMiddleware(thunk))
);

// define persistor
const persistor = persistStore(store);

// define types for redux thunk
export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof storeReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>;

// export typed hooks
export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;

export default store;
export { persistor };