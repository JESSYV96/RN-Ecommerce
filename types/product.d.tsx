import { ImageURISource } from 'react-native'
import Product from '../models/Product'

const PRODUCT_LIST = 'PRODUCT_LIST'

export interface ProductState {
    availableProducts: Product[],
    userProducts: Product[]
}

export interface ProductListAction {
    type: typeof PRODUCT_LIST,
    product?: Product[],
    productId?: String
}

export type ProductItemType = {
    image: ImageURISource | any,
    title: String,
    price: Number,
    children?: any,
    onSelect?: VoidFunction,
}