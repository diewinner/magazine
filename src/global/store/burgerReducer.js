const defaultStateBurger = {
    menu: false
}

const ON_MENU = "ON_MENU"
const OFF_MENU = "OFF_MENU"

export const burgerReducer = (state = defaultStateBurger, action) => {
    switch (action.type) {
        case ON_MENU:
            return {...state, menu: action.payload }
        case OFF_MENU:
            return {...state,menu: action.payload }
        default:
            return state
    }
}

export const onMenuAction = (payload) => ({type:ON_MENU, payload})
export const offMenuAction = (payload) => ({type:OFF_MENU, payload})