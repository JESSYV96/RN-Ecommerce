import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { useSelector, RootStateOrAny } from 'react-redux'
import ProductItem from '../../components/shop/ProductItem'
import { Props } from '../../types/Props.d'

const ProductOverviewScreen = ({ navigation }: Props) => {
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
            onAddToCart={() => { }}
        />}
        data={productList} />
}

ProductOverviewScreen.navigationOptions = {
    title: 'Tout nos produits'
}

export default ProductOverviewScreen

const styles = StyleSheet.create({})
