import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { PURGE } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// initial states here
const initalState = {};

// middleware
const middleware = [thunk];

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['auth']
  // blacklist: ['auth']
};


extraReducers: (builder) => {
  builder.addCase(PURGE, (state) => {
    customEntityAdapter.removeAll("root");
  });
}


const persistedReducer = persistReducer(persistConfig, rootReducer);

// creating store
export const store = createStore(
  persistedReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

const persistor = persistStore(store);



// assigning store to next wrapper
const makeStore = () => store;

export { persistor };

export const wrapper = createWrapper(makeStore);

// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { createWrapper } from "next-redux-wrapper";
// // import { persistStore, persistReducer } from "redux-persist";
// import rootReducer from "./reducers";
// // import storage from "redux-persist/lib/storage";
// // initial states here
// const initalState = {};

// // middleware
// const middleware = [thunk];

// // const persistConfig = {
// //   key: "persist-key",
// //   storage,
// // };

// // const persistedReducer = persistReducer(persistConfig, rootReducer);

// // creating store
// export const store = createStore(
//   // persistedReducer,
//   rootReducer,
//   initalState,
//   composeWithDevTools(applyMiddleware(...middleware)),
// );

// // const persistor = persistStore(store);

// // assigning store to next wrapper
// const makeStore = () => store;

// // export { persistor };

// export const wrapper = createWrapper(makeStore);
