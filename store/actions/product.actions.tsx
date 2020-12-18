export const DELETE_PRODUCT: String = 'DELETE_PRODUCT'

export const deleteProduct = (productId: string) => (dispatch: any) => {
    return dispatch({
        type: DELETE_PRODUCT,
        productId: productId
    })
}