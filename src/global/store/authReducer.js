
const defaultStateAuth = {
    auth: false
}



const AUTH = "ADD_FAVORITE"
const NOT_AUTH = "DELETE_FAVORITE"
export const authReducer = (state = defaultStateAuth, action) => {
    switch (action.type) {
        case AUTH:
            return {...state, auth: action.payload }
        case NOT_AUTH:
            return {...state,auth: action.payload }
        default:
            return state
    }
}



export const OnModalAction = (payload) => ({type:AUTH, payload})
export const OffModalAction = (payload) => ({type:NOT_AUTH, payload})