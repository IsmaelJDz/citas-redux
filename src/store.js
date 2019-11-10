import { createStore } from "redux"
import reducer from "./reducers/index";
import { obtenerStateStorage, guardaStateStorage } from "./localstorage";

//const initialState = {};
//obtener citas de localStorage
const storageState = obtenerStateStorage();

const store = createStore(
  reducer,
  storageState,
  window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()
);

//Se subscribe al store, cuando algo cambia lo guarda en localstorage
store.subscribe( () => { 
  guardaStateStorage({
    citas: store.getState().citas
  }) 
})

export default store;