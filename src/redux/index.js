import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {catalogReducer} from "./reducer/catalogReducer";



export const store = createStore(catalogReducer, composeWithDevTools(applyMiddleware(thunk)))