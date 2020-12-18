import moment from 'moment'
import { CartItemType } from "../types/cart.d";

export default interface IOrder {
    id: String,
    items: [],
    totalAmount: Number,
    date: Date,
    readonly dateReadable: String
}

export class Order implements IOrder {
    id: String;
    items;
    totalAmount: Number;
    date: Date;

    constructor(id: String, items: Array<CartItemType>, totalAmount: Number, date: Date) {
        this.id = id
        this.items = items
        this.totalAmount = totalAmount
        this.date = date
    }

    get dateReadable() {
        //return this.date.toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })
        return moment(this.date).format('L');
    }
}
