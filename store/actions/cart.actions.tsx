import Product from "../../models/Product"
import { ADD_TO_CART, REMOVE_TO_CART } from "../constants/cart.constants"

export const addToCart = (product: Product | undefined) => (dispatch: any) => {
    if (product === undefined) {
        return;
    }

    return dispatch({
        type: ADD_TO_CART,
        product: product
    })
}

export const removeFromCart = (id: string | undefined) => (dispatch: any) => {
    if (id === undefined) {
        return console.log('does not exist');
    }

    return dispatch({
        type: REMOVE_TO_CART,
        productId: id
    })
}