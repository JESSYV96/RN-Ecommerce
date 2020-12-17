import { CartItemType } from "../../types/cart.d"

export const ADD_ORDER: String = 'ADD_ORDER'

export const addOrder = (cartItems, totalAmount) => (dispatch: any) => {
    return dispatch({
        type: ADD_ORDER,
        orderData: {
            item: cartItems,
            amount: totalAmount
        }
    })
}
