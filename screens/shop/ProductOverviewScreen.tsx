import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux'
import ProductItem from '../../components/shop/ProductItem'
import { addToCart } from '../../store/actions/cart.actions'
import { Props } from '../../types/Props.d'

const ProductOverviewScreen = ({ navigation }: Props) => {
    const dispatch = useDispatch()
    const productList = useSelector((state: RootStateOrAny) => state.productList.availableProduct)
    return <FlatList
        renderItem={itemData => <ProductItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onViewDetails={() => {
                navigation.navigate('ProductDetails', {
                    id: itemData.item.id,
                    title: itemData.item.title
                })
            }}
            onAddToCart={() => dispatch(addToCart(itemData.item)) }
        />}
        data={productList} />
}

ProductOverviewScreen.navigationOptions = {
    title: 'Tout nos produits'
}

export default ProductOverviewScreen

const styles = StyleSheet.create({})
