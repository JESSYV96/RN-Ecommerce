import Product from "../../models/Product"
import { ADD_TO_CART } from "../constants/cart.constants"

export const addToCart = (product: Product | undefined) => (dispatch: any) => {
    if (product === undefined) {
        return;
    }

    return dispatch({
        type: ADD_TO_CART,
        payload: product
    })
}