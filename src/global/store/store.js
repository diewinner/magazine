import {createStore, combineReducers} from "redux";
import {favoriteReducer} from "./favoriteReducer";
import {burgerReducer} from "./burgerReducer";
import {authReducer} from "./authReducer";

const rootReducer = combineReducers({
    favorite:favoriteReducer,
    menu:burgerReducer,
    auth:authReducer,
})



export const store = createStore(rootReducer)