import PRODUCTS from '../../data/dummy-data'
import { ProductListAction, ProductState } from '../../types/product.d'
import { DELETE_PRODUCT } from '../actions/product.actions';

const initialState: ProductState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(product => product.ownerId === 'u1')
}

export const productListReducer = (state = initialState, action: ProductListAction) => {
    switch (action.type) {
        case DELETE_PRODUCT:
            return {
                ...state,
                userProducts: state.userProducts.filter(product => product.id !== action.productId),
                availableProducts: state.availableProducts.filter(product => product.id !== action.productId)
            };
        default:
            return state
    }

}



