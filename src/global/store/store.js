import {createStore, combineReducers} from "redux";
import {favoriteReducer} from "./favoriteReducer";
import {burgerReducer} from "./burgerReducer";

const rootReducer = combineReducers({
    favorite:favoriteReducer,
    menu:burgerReducer,
})



export const store = createStore(rootReducer)