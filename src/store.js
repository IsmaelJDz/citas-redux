import { createStore } from "redux"

const initialState = [];

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEV_TOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;