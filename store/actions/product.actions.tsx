export const DELETE_PRODUCT: String = 'DELETE_PRODUCT'
export const CREATE_PRODUCT: String = 'CREATE_PRODUCT'
export const UPDATE_PRODUCT: String = 'UPDATE_PRODUCT'

export const deleteProduct = (productId: string) => (dispatch: any) => {
    return dispatch({
        type: DELETE_PRODUCT,
        productId: productId
    })
}

export const createProduct = (title: string, imageUrl: string, price: number, description: string) => (dispatch: any) => {
    return dispatch({
        type: CREATE_PRODUCT,
        productData: {
            title,
            imageUrl,
            price,
            description
        }
    })
}

export const updateProduct = (id: string, title: string, imageUrl: string, description: string) => (dispatch: any) => {
    return dispatch({
        type: UPDATE_PRODUCT,
        productId: id,
        productData: {
            title,
            imageUrl,
            description
        }
    })
}