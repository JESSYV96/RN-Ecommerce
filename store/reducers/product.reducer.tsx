import PRODUCTS from '../../data/dummy-data'
import IProduct, { Product } from '../../models/Product';
import { ProductListAction, ProductState } from '../../types/product.d'
import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from '../actions/product.actions';

const initialState: ProductState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(product => product.ownerId === 'u1')
}

export const productListReducer = (state = initialState, action: ProductListAction) => {
    switch (action.type) {
        case CREATE_PRODUCT:
            const newProduct = new Product(
                new Date().toString(), 
                'u1',
                action.productData.title,
                action.productData.imageUrl,
                action.productData.description,
                action.productData.price,
                )
            return {
                ...state,
                availableProducts: state.availableProducts.concat(newProduct),
                userProducts: state.userProducts.concat(newProduct)
            }
        case UPDATE_PRODUCT:
            console.log(state.userProducts);
            const productIndex = state.userProducts.findIndex(p => p.id === action.productId)
            const productIndexAvailableProduct = state.availableProducts.findIndex(p => p.id === action.productId)

            const updateProduct = new Product(
                action.productId,
                state.userProducts[productIndex].ownerId,
                action.productData.title,
                action.productData.imageUrl,
                action.productData.description,
                state.userProducts[productIndex].price,

            )
            const updatedUserProducts = [...state.userProducts]
            updatedUserProducts[productIndex] = updateProduct
            
            const updatedAvailableProducts = [...state.availableProducts]
            updatedAvailableProducts[productIndexAvailableProduct] = updateProduct

            return {
                ...state,
                availableProducts: updatedUserProducts,
                userProducts: updatedAvailableProducts
            }
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



