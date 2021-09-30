import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

function reducer(state = {catalog: [], cart : []}, action) {
    switch (action.type) {
        case 'GET_CATALOG':
            return {...state, catalog: action.payload}
        case 'ADD_TO_CART':
            const findProduct = state.cart.find(el => el.id === action.payload.id)
            if(findProduct){
               return {...state, cart: state.cart.map(item => item.id === findProduct.id ?
                       {...findProduct, quantity: findProduct.quantity + 1} : item)}
        }
            return { ...state, cart: [...state.cart, {...action.payload, quantity : 1}]}
        case 'REMOVE_FROM_CART':
            return {...state, cart: state.cart.filter(el => el.id !== action.payload)}
        case 'DECREASE_AMOUNT_IN_CART':
            const deleteProduct = state.cart.find(el => el.id === action.payload.id)
            if(deleteProduct){
                return {...state, cart: state.cart.map(item => item.id === deleteProduct.id ?
                        {...deleteProduct, quantity: Math.max(deleteProduct.quantity - 1, 1)} : item)}
            }
            return state
        default:
            return state
    }
}

export const store = createStore(reducer, composeWithDevTools())