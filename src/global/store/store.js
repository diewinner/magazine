import {createStore, combineReducers} from "redux";
import {favoriteReducer} from "./favoriteReducer";

const rootReducer = combineReducers({
    favorite:favoriteReducer,
})



export const store = createStore(rootReducer)