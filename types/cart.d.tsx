import Product from "../models/Product";
import CartItem from '../models/CartItem'
import { ADD_TO_CART } from "../store/constants/cart.constants";

export interface CartItemState {
    cartItems: object|any,
    totalAmount: number
}

export interface CartItemAction {
    type: typeof ADD_TO_CART,
    payload: Product
}