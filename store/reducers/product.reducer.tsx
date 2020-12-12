import PRODUCTS from '../../data/dummy-data'
import { ProductListAction, ProductState } from '../types/product.types'

const initialState: ProductState = {
    availableProduct: PRODUCTS,
    userProducts: PRODUCTS.filter(product => product.ownerId === 'u1')
}

export const productListReducer = (state = initialState, action: ProductListAction) => {
    return state
}