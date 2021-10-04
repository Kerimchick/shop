import axios from "axios";

export const getCatalog = (data) => {
    return (dispatch) => {
        dispatch({type: "GET_CATALOG_LOADING"})
        axios("https://611675aa1c592d0017bb7f09.mockapi.io/shop")
            .then(({data}) => {
                return dispatch({type: "GET_CATALOG", payload: data})
            })
    }
}

export const addToCart = (item) => {
    return {type: "ADD_TO_CART", payload: item}
}

export const decreaseProduct = (item) => {
   return  {type: "DECREASE_AMOUNT_IN_CART", payload: item}
}

export const removeFromCart = (item) => {
    return  {type: "REMOVE_FROM_CART", payload : item.id}
}