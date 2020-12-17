import { v4 as uuidv4 } from 'uuid';
import Order from "../../models/Order";
import { ADD_ORDER } from "../actions/order.actions";

const initialState = {
    orders: []
}
export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER:
            const newOrder: Order = {
                id: uuidv4(),
                items:  action.orderData.item,
                totalAmount: action.orderData.amount,
                date: new Date()
            }
            console.log(newOrder);
            return {
                ...state,
                orders: state.orders.concat(newOrder)
            }
    
        default:
            break;
    }
}