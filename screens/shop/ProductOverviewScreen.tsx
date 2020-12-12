import React from 'react'
import { StyleSheet,FlatList } from 'react-native'
import { useSelector, RootStateOrAny } from 'react-redux'
import ProductItem from '../../components/shop/ProductItem'

const ProductOverviewScreen = ({ }) => {
    const productList = useSelector((state: RootStateOrAny) => state.productList.availableProduct)
    return <FlatList
        renderItem={itemData => <ProductItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onAddToCart={() => { }}
            onViewDetails={() => { }}
        />}
        data={productList} />
}

ProductOverviewScreen.navigationOptions = {
    title: 'Tout nos produits'
}

export default ProductOverviewScreen

const styles = StyleSheet.create({})
