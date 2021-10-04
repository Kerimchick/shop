export function catalogReducer(state = {catalog: [], cart : [], isLoading: false}, action) {
    switch (action.type) {
        case "GET_CATALOG_LOADING":
            return {...state, isLoading: true}
        case 'GET_CATALOG':
            return {...state, catalog: action.payload, isLoading: false}
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