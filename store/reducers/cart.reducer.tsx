import Product from "../../models/Product";
import { ADD_TO_CART, REMOVE_TO_CART } from "../constants/cart.constants";
import { CartItemAction, CartItemState } from "../../types/cart.d"
import ICartItem from '../../models/CartItem'
import { calculPrice } from "../../utils/calculPrice";

const initialState: CartItemState = {
    cartItems: {},
    totalAmount: 0
}

export const cartReducer = (state = initialState, action: CartItemAction) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct: Product = action.product
            const price: number = addedProduct.price
            const title: string = addedProduct.title

            if (addedProduct.id in state.cartItems) {
                const updItem: ICartItem = {
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
                const newItem: ICartItem = {
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
        case REMOVE_TO_CART:
            const item: ICartItem = state.cartItems[action.productId]
            const qty: number = item.quantity
            let updCartItems
            if (qty > 1) {
                const updCartItem = {
                    title: item.title,
                    quantity: item.quantity - 1,
                    price: item.price,
                    sum: item.sum - item.price
                }

                updCartItems = { ...state.cartItems, [action.productId]: updCartItem }

                return {
                    ...state,
                    cartItems: updCartItems,
                    totalAmount: state.totalAmount - item.price
                }
            } else {
                updCartItems = { ...state.cartItems } // => make a copy current array
                delete updCartItems[action.productId]
                return {
                    ...state,
                    cartItems: updCartItems,
                    totalAmount: state.totalAmount - item.price
                }
            }
            return state
        default:
            return state
    }

}