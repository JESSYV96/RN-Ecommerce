import { ImageURISource } from 'react-native'
import IProduct from '../models/Product'
import Product from '../models/Product'

const PRODUCT_LIST = 'PRODUCT_LIST'

export interface ProductState {
    availableProducts: Product[],
    userProducts: Product[]
}

export interface ProductListAction {
    type: typeof PRODUCT_LIST,
    product?: Product[],
    productData?: IProduct,
    productId?: string
}

export type ProductItemType = {
    image: ImageURISource | any,
    title: string,
    price: number,
    children?: any,
    onSelect?: VoidFunction,
}