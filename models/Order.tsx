import { CartItemType } from "../types/cart.d";

export default interface Order {
    id: String,
    items: [],
    totalAmount: Number,
    date: Date
}