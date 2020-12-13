import { exp } from 'react-native-reanimated'
import Product from '../models/Product'

const PRODUCT_LIST = 'PRODUCT_LIST'

export interface ProductState {
    availableProduct: Product[],
    userProducts: Product[]
}

export interface ProductListAction {
    type: typeof PRODUCT_LIST,
    payload: Product[]
}