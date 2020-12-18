import IOrder, { Order } from "../../models/Order";
import { ADD_ORDER } from "../actions/order.actions";

const initialState = {
    orders: []
}
export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER:
            const newOrder: IOrder = new Order(
                new Date().toString(),
                action.orderData.item,
                action.orderData.amount,
                new Date()
            )
            return {
                ...state,
                orders: state.orders.concat(newOrder)
            }

        default:
            return state;
    }
}