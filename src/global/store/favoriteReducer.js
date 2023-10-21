
const defaultStateFavorite = {
    favorite: []
}



const ADD_FAVORITE = "ADD_FAVORITE"
const DELETE_FAVORITE = "DELETE_FAVORITE"
export const favoriteReducer = (state = defaultStateFavorite, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {...state, favorite: [...state.favorite, action.payload] }
        case DELETE_FAVORITE:
            return {...state,favorite: state.favorite.filter(favoriteItem => favoriteItem.id !== action.payload) }
        default:
            return state
    }
}



export const addCustomerAction = (payload) => ({type:ADD_FAVORITE, payload})
export const deleteCustomerAction = (payload) => ({type:DELETE_FAVORITE, payload})
