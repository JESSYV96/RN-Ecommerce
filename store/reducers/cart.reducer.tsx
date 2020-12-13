import Product from "../../models/Product";
import { ADD_TO_CART } from "../constants/cart.constants";
import { CartItemAction, CartItemState } from "../../types/cart.d"
import CartItem from '../../models/CartItem'
import { calculPrice } from "../../utils/calculPrice";

const initialState: CartItemState = {
    cartItems: {},
    totalAmount: 0
}

export const cartReducer = (state = initialState, action: CartItemAction) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct: Product = action.payload
            const price: number = addedProduct.price
            const title: string = addedProduct.title

            if (addedProduct.id in state.cartItems) {
                const updItem: CartItem = {
                    title: title,
                    quantity: state.cartItems[addedProduct.id].quantity + 1,
                    price: price,
                    sum: state.cartItems[addedProduct.id].sum + price
                }
                return {
                    ...state,
                    cartItems: { ...state.cartItems, [addedProduct.id]: updItem },
                    totalAmount: state.totalAmount + price
                }
            } else {
                const newItem: CartItem = {
                    title: title,
                    quantity: 1,
                    price: price,
                    sum: calculPrice(1, price)
                }

                return {
                    ...state,
                    cartItems: { ...state.cartItems, [addedProduct.id]: newItem },
                    totalAmount: state.totalAmount + price
                }
            }

        default:
            break;
    }
    return state
}