import Order from "../../models/Order";
import { ADD_ORDER } from "../actions/order.actions";

const initialState = {
    orders: []
}
export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER:
            const newOrder: Order = {
                id: new Date().toString(),
                items: action.orderData.item,
                totalAmount: action.orderData.amount,
                date: new Date()
            }
            return {
                ...state,
                orders: state.orders.concat(newOrder)
            }
    
        default:
            return state;
    }
}