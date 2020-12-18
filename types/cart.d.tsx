import Product from "../models/Product";
import { ADD_TO_CART, REMOVE_TO_CART } from "../store/constants/cart.constants";

export interface CartItemState {
    cartItems: object | any,
    totalAmount: number
}

export interface CartItemAction {
    type: typeof ADD_TO_CART | typeof REMOVE_TO_CART,
    product: Product
    productId: string
}

export type CartItemType = {
    title: string,
    quantity: number,
    amount: number,
    onRemove?(): void
}